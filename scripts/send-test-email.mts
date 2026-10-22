/**
 * Render the email template and send a test through Resend.
 *
 *   npx tsx scripts/send-test-email.mts [recipient] [--preview-only]
 *
 * Recipient defaults to CONTACT_TO_EMAIL from .env. Writes the rendered HTML
 * to scripts/email-preview.html either way. The logo is attached inline (CID)
 * so it shows even before public/email/ is deployed.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { renderEmail, LOGO_CID } from "../src/lib/email/template.ts";

const root = new URL("../", import.meta.url);

const env = Object.fromEntries(
  readFileSync(new URL(".env", root), "utf8")
    .split("\n")
    .filter((l) => /^[A-Z_]+=/.test(l))
    .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1).trim()]),
);

const args = process.argv.slice(2);
const previewOnly = args.includes("--preview-only");
const to = args.find((a) => !a.startsWith("--")) ?? env.CONTACT_TO_EMAIL;

const content = {
  subject: "We got your message",
  preheader: "A real person reads every enquiry. Expect a reply within one business day.",
  eyebrow: "Enquiry received",
  heading: "Thanks, Amina. Your message is with us.",
  paragraphs: [
    "A real person reads every enquiry that comes through northbitlabs.tech, and that person is usually me. You will hear back within one business day, with either answers or a few sharp questions.",
    "If it helps to talk it through sooner, book a 30 minute discovery call. No slides, no pitch. We look at what you are running today and where software or automation would actually pay for itself.",
  ],
  cta: { label: "Book a discovery call", href: "https://northbitlabs.tech/contact" },
  secondary: { label: "See work we have shipped", href: "https://northbitlabs.tech/work" },
  steps: [
    { title: "We read it properly", body: "Your brief goes to the founder, not a sales queue." },
    { title: "A short call", body: "30 minutes to understand the operation, the bottleneck, and the budget." },
    { title: "A written proposal", body: "Scope, timeline and a fixed price within a week of the call." },
  ],
};

const { html: previewHtml } = renderEmail(content);
const previewPath = new URL("scripts/email-preview.html", root);
writeFileSync(
  previewPath,
  previewHtml.replace("https://northbitlabs.tech/email/", "../public/email/"),
);
console.log(`Preview written: ${previewPath.pathname}`);

if (previewOnly) process.exit(0);

if (!env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing from .env");
if (!to) throw new Error("No recipient. Pass one or set CONTACT_TO_EMAIL.");

const { html, text } = renderEmail({ ...content, logoSrc: LOGO_CID });
const logo = readFileSync(new URL("public/email/northbit-logo-inverted.png", root));

const res = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${env.RESEND_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from: `NorthBit Labs <${env.RESEND_FROM_EMAIL ?? "hello@northbitlabs.tech"}>`,
    to: [to],
    subject: `[Test] ${content.subject}`,
    html,
    text,
    attachments: [
      {
        filename: "northbit-logo.png",
        content: logo.toString("base64"),
        content_id: "northbit-logo",
      },
    ],
  }),
});

const body = await res.json();
if (!res.ok) {
  console.error(`Resend error ${res.status}:`, body);
  process.exit(1);
}
console.log(`Sent to ${to}. Resend id: ${body.id}`);
