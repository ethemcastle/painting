import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL_TO =
  process.env.CONTACT_EMAIL_TO || "hoxhajgramoz@gmail.com";
const CONTACT_EMAIL_FROM =
  process.env.CONTACT_EMAIL_FROM ||
  "Painting Your World <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please tell us your name." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 },
    );
  }
  if (message.length < 4) {
    return NextResponse.json(
      { ok: false, error: "A short message is enough — just a sentence." },
      { status: 400 },
    );
  }

  const subject = `Color visit — ${name}`;

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        ok: false,
        error: "Email service is not configured. Try WhatsApp instead.",
      },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: CONTACT_EMAIL_FROM,
      to: [CONTACT_EMAIL_TO],
      replyTo: email,
      subject,
      text: [
        `From: ${name} <${email}>`,
        "",
        message,
        "",
        "— Sent from paintingyourworld.com",
      ].join("\n"),
      html: renderHtml({ name, email, message }),
    });

    if (error) {
      // Don't leak provider error verbatim; log it server-side.
      console.error("[contact] resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send. Please try WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try WhatsApp." },
      { status: 500 },
    );
  }
}

function renderHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const bodyHtml = esc(message).replace(/\n/g, "<br>");
  return `<!doctype html>
<html>
  <body style="font-family: -apple-system, system-ui, Segoe UI, Roboto, sans-serif; color:#0f0f0f; line-height:1.55; max-width:560px; margin:0 auto; padding:24px;">
    <p style="font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#8a8a8a; margin:0 0 16px;">New color-visit request</p>
    <p style="margin:0 0 8px;"><strong>From:</strong> ${esc(name)} &lt;<a href="mailto:${esc(email)}" style="color:#2D5D4E;">${esc(email)}</a>&gt;</p>
    <hr style="border:none; border-top:1px solid #eee; margin:18px 0;">
    <p style="margin:0; white-space:pre-wrap;">${bodyHtml}</p>
    <hr style="border:none; border-top:1px solid #eee; margin:24px 0 12px;">
    <p style="font-size:12px; color:#8a8a8a; margin:0;">Reply directly to this email to respond to ${esc(name)}.</p>
  </body>
</html>`;
}
