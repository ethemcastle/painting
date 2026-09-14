import { ImageResponse } from "next/og";

export const alt =
  "Painting Your World LLC — Interior and exterior painters in Philadelphia";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#f8f6f1",
          color: "#1a1a1a",
          padding: "70px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            display: "flex",
            height: "18px",
          }}
        >
          {[
            "#f4d14a",
            "#2d5d4e",
            "#c46447",
            "#a8c8e0",
          ].map((color) => (
            <div key={color} style={{ flex: 1, background: color }} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 22,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span>Painting Your World LLC</span>
            <span style={{ color: "#2d5d4e" }}>Philadelphia, PA</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                maxWidth: 950,
                fontSize: 82,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
              }}
            >
              Interior & exterior painting, done right.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 30,
                fontSize: 28,
                color: "#55514a",
              }}
            >
              Free estimates · Fully insured · 3-year workmanship warranty
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "2px solid #d8d4cb",
              paddingTop: 24,
              fontSize: 24,
            }}
          >
            <span>painting-your-world.com</span>
            <span>(267) 227-6745</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
