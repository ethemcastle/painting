export type PaintColor = {
  num: string;
  name: string;
  hex: string;
  family: string;
  finish: string;
  on: string;
  light: boolean;
};

export const COLORS: PaintColor[] = [
  { num: "01", name: "Lemon Whip",   hex: "#F4D14A", family: "Sunny yellows", finish: "Eggshell · 12%", on: "#1A1A1A", light: true },
  { num: "02", name: "Mallard",      hex: "#2D5D4E", family: "Deep greens",   finish: "Matte · 5%",     on: "#F8F6F1", light: false },
  { num: "03", name: "Slate Bay",    hex: "#4A6B8A", family: "Dusty blues",   finish: "Matte · 5%",     on: "#F8F6F1", light: false },
  { num: "04", name: "Terracotta",   hex: "#C46447", family: "Warm earths",   finish: "Eggshell · 12%", on: "#F8F6F1", light: false },
  { num: "05", name: "Lilac Field",  hex: "#B89DC4", family: "Soft purples",  finish: "Matte · 5%",     on: "#1A1A1A", light: true },
  { num: "06", name: "Rose Quartz",  hex: "#E8A4B5", family: "Quiet pinks",   finish: "Eggshell · 12%", on: "#1A1A1A", light: true },
  { num: "07", name: "Forest Pine",  hex: "#3D5942", family: "Deep greens",   finish: "Matte · 5%",     on: "#F8F6F1", light: false },
  { num: "08", name: "Ochre Lane",   hex: "#D4A24C", family: "Warm golds",    finish: "Eggshell · 12%", on: "#1A1A1A", light: true },
  { num: "09", name: "Plum Velvet",  hex: "#6E3F5F", family: "Deep purples",  finish: "Matte · 5%",     on: "#F8F6F1", light: false },
  { num: "10", name: "Powder Sky",   hex: "#A8C8E0", family: "Light blues",   finish: "Matte · 5%",     on: "#1A1A1A", light: true },
  { num: "11", name: "Ink Black",    hex: "#1A1A1A", family: "Neutrals",      finish: "Matte · 3%",     on: "#F8F6F1", light: false },
  { num: "12", name: "Bone White",   hex: "#F2EBDC", family: "Warm whites",   finish: "Eggshell · 12%", on: "#1A1A1A", light: true },
];
