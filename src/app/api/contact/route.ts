import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? "hello@northbitlabs.tech";
const TO   = process.env.CONTACT_TO_EMAIL   ?? "northbitlabs@gmail.com";

const ALLOWED_ORIGINS = [
  "https://northbitlabs.tech",
  "https://www.northbitlabs.tech",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
];

const MAX_PAYLOAD_BYTES = 8_000;
const LIMITS = { name: 120, company: 120, email: 254, message: 3000 };

// In-memory rate limit: one submission per IP per 60 seconds.
const lastSubmission = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = lastSubmission.get(ip);
  if (last && now - last < 60_000) return true;
  lastSubmission.set(ip, now);
  return false;
}

// Escape HTML entities before interpolating user content into the email body.
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// CORS preflight — browsers send this before the actual POST.
export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return new Response(null, { status: 403 });
  }
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function POST(request: Request) {
  const headersList = await headers();

  // Origin check — blocks cross-site form submissions.
  const origin = headersList.get("origin") ?? "";
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return Response.json({ error: "Forbidden." }, { status: 403 });
  }

  // Payload size guard — reject oversized bodies before parsing JSON.
  const contentLength = Number(headersList.get("content-length") ?? 0);
  if (contentLength > MAX_PAYLOAD_BYTES) {
    return Response.json({ error: "Payload too large." }, { status: 413 });
  }

  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  let body: {
    name?: string;
    company?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this field, humans don't.
  if (body.website) {
    return Response.json({ ok: true });
  }

  const name    = String(body.name    ?? "").trim().slice(0, LIMITS.name);
  const company = String(body.company ?? "").trim().slice(0, LIMITS.company);
  const email   = String(body.email   ?? "").trim().slice(0, LIMITS.email);
  const message = String(body.message ?? "").trim().slice(0, LIMITS.message);

  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      text: [
        `Name:    ${name}`,
        `Company: ${company || "—"}`,
        `Email:   ${email}`,
        ``,
        message || "(no message)",
      ].join("\n"),
      // User-supplied fields are escaped before being interpolated into HTML.
      html: `
        <table style="font-family:sans-serif;font-size:15px;color:#0B0F14;border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:32px 32px 0"><img src="https://northbitlabs.tech/favicon.svg" width="32" height="32" alt="NorthBit Labs" /></td></tr>
          <tr><td style="padding:24px 32px 0;font-size:22px;font-weight:600">New enquiry</td></tr>
          <tr><td style="padding:24px 32px;border-top:1px solid #D9E1E8;margin-top:16px">
            <p style="margin:0 0 8px"><strong>Name:</strong> ${esc(name)}</p>
            <p style="margin:0 0 8px"><strong>Company:</strong> ${esc(company) || "—"}</p>
            <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          </td></tr>
          <tr><td style="padding:0 32px 32px;border-top:1px solid #D9E1E8">
            <p style="margin:16px 0 8px;font-weight:600">Message</p>
            <p style="margin:0;color:#5C6470;line-height:1.6;white-space:pre-wrap">${esc(message) || "(no message)"}</p>
          </td></tr>
          <tr><td style="padding:20px 32px;background:#F5F2EC;font-size:12px;color:#9098A4">
            Sent via northbitlabs.tech contact form
          </td></tr>
        </table>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] resend error", err);
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
