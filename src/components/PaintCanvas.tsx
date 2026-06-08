"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Tool = "brush" | "eraser";

type Point = { x: number; y: number };

const COLORS = [
  "#111827", // ink
  "#ffffff", // white
  "#9ca3af", // gray
  "#ef4444", // red
  "#f97316", // orange
  "#f59e0b", // amber
  "#facc15", // yellow
  "#22c55e", // green
  "#14b8a6", // teal
  "#3b82f6", // blue
  "#6366f1", // indigo
  "#a855f7", // purple
  "#ec4899", // pink
  "#92400e", // brown
] as const;

const BACKGROUND = "#ffffff";
const MAX_HISTORY = 40;

export default function PaintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<Point | null>(null);

  const undoStackRef = useRef<ImageData[]>([]);
  const redoStackRef = useRef<ImageData[]>([]);

  const [color, setColor] = useState<string>("#111827");
  const [brushSize, setBrushSize] = useState<number>(8);
  const [tool, setTool] = useState<Tool>("brush");
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const syncHistoryFlags = useCallback(() => {
    setCanUndo(undoStackRef.current.length > 0);
    setCanRedo(redoStackRef.current.length > 0);
  }, []);

  const pushUndoSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    undoStackRef.current.push(
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    );
    if (undoStackRef.current.length > MAX_HISTORY) {
      undoStackRef.current.shift();
    }
    redoStackRef.current = [];
    syncHistoryFlags();
  }, [syncHistoryFlags]);

  // Size the canvas to its container with crisp high-DPI rendering,
  // preserving any existing artwork across resizes.
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const width = Math.round(rect.width * dpr);
    const height = Math.round(rect.height * dpr);
    if (canvas.width === width && canvas.height === height) return;

    const snapshot =
      canvas.width > 0 && canvas.height > 0 ? canvas.toDataURL() : null;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;

    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, rect.width, rect.height);

    if (snapshot) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = snapshot;
    }
  }, []);

  useEffect(() => {
    setupCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const observer = new ResizeObserver(() => setupCanvas());
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [setupCanvas]);

  const getPoint = (event: ReactPointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const drawSegment = (from: Point, to: Point) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.strokeStyle = tool === "eraser" ? BACKGROUND : color;
    ctx.lineWidth = brushSize;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    if (!ctxRef.current) return;
    pushUndoSnapshot();
    isDrawingRef.current = true;
    const point = getPoint(event);
    lastPointRef.current = point;
    canvasRef.current?.setPointerCapture(event.pointerId);
    // A single tap should leave a dot.
    drawSegment(point, point);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    event.preventDefault();
    const last = lastPointRef.current;
    const point = getPoint(event);
    if (last) drawSegment(last, point);
    lastPointRef.current = point;
  };

  const endStroke = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;
    canvasRef.current?.releasePointerCapture(event.pointerId);
  };

  const undo = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || undoStackRef.current.length === 0) return;
    redoStackRef.current.push(
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    );
    const previous = undoStackRef.current.pop();
    if (previous) ctx.putImageData(previous, 0, 0);
    syncHistoryFlags();
  }, [syncHistoryFlags]);

  const redo = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || redoStackRef.current.length === 0) return;
    undoStackRef.current.push(
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    );
    const next = redoStackRef.current.pop();
    if (next) ctx.putImageData(next, 0, 0);
    syncHistoryFlags();
  }, [syncHistoryFlags]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    pushUndoSnapshot();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }, [pushUndoSnapshot]);

  const downloadPng = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `painting-${new Date().toISOString().slice(0, 19)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);

  // Keyboard shortcuts: undo / redo.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const mod = event.metaKey || event.ctrlKey;
      if (!mod || event.key.toLowerCase() !== "z") return;
      event.preventDefault();
      if (event.shiftKey) redo();
      else undo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [undo, redo]);

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-900/70">
        {/* Tools */}
        <div className="flex items-center gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
          <button
            type="button"
            onClick={() => setTool("brush")}
            aria-pressed={tool === "brush"}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              tool === "brush"
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            🖌️ Brush
          </button>
          <button
            type="button"
            onClick={() => setTool("eraser")}
            aria-pressed={tool === "eraser"}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              tool === "eraser"
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-950 dark:text-white"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            🧽 Eraser
          </button>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {COLORS.map((swatch) => {
              const active = tool === "brush" && color === swatch;
              return (
                <button
                  key={swatch}
                  type="button"
                  onClick={() => {
                    setColor(swatch);
                    setTool("brush");
                  }}
                  aria-label={`Color ${swatch}`}
                  className={`h-7 w-7 rounded-full border transition-transform hover:scale-110 ${
                    active
                      ? "border-blue-500 ring-2 ring-blue-500/40"
                      : "border-black/15 dark:border-white/20"
                  }`}
                  style={{ backgroundColor: swatch }}
                />
              );
            })}
          </div>
          <label className="relative h-7 w-7 cursor-pointer overflow-hidden rounded-full border border-black/15 dark:border-white/20">
            <span
              className="block h-full w-full"
              style={{
                background:
                  "conic-gradient(from 0deg, red, orange, yellow, lime, cyan, blue, magenta, red)",
              }}
            />
            <input
              type="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
                setTool("brush");
              }}
              className="absolute inset-0 cursor-pointer opacity-0"
              aria-label="Custom color picker"
            />
          </label>
        </div>

        {/* Brush size */}
        <div className="flex items-center gap-3">
          <span
            className="inline-block rounded-full bg-zinc-900 dark:bg-zinc-100"
            style={{
              width: Math.max(4, Math.min(brushSize, 28)),
              height: Math.max(4, Math.min(brushSize, 28)),
            }}
          />
          <input
            type="range"
            min={1}
            max={60}
            value={brushSize}
            onChange={(event) => setBrushSize(Number(event.target.value))}
            className="w-32 accent-blue-600"
            aria-label="Brush size"
          />
          <span className="w-8 text-sm tabular-nums text-zinc-500">
            {brushSize}px
          </span>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={undo}
            disabled={!canUndo}
            className="rounded-lg border border-black/10 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            ↶ Undo
          </button>
          <button
            type="button"
            onClick={redo}
            disabled={!canRedo}
            className="rounded-lg border border-black/10 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            ↷ Redo
          </button>
          <button
            type="button"
            onClick={clearCanvas}
            className="rounded-lg border border-red-500/30 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-950/40"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={downloadPng}
            className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            ⬇ Save PNG
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endStroke}
          onPointerLeave={endStroke}
          onPointerCancel={endStroke}
          className="block h-[60vh] max-h-[680px] w-full touch-none bg-white"
          style={{
            cursor:
              tool === "eraser"
                ? "cell"
                : "crosshair",
          }}
        />
      </div>
    </div>
  );
}



