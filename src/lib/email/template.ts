/**
 * NorthBit Labs transactional email layout.
 *
 * Table-based, inline-styled HTML that holds up in Gmail, Apple Mail,
 * Outlook (desktop + web) and mobile clients. Brand tokens mirror DESIGN.md.
 * Clash Grotesk / Satoshi load from Fontshare where the client allows web
 * fonts (Apple Mail, iOS); everyone else falls back to Helvetica/Arial.
 *
 * The logo is the inverted lockup (Polar wordmark, Signal Green mark) on an
 * Ink band. Dark header stays dark when Gmail/Outlook force dark mode, so the
 * mark never disappears into an inverted background.
 *
 * Every string passed in is escaped. Paragraphs are plain text.
 */

export const LOGO_URL = "https://northbitlabs.tech/email/northbit-logo-inverted.png";
export const LOGO_CID = "cid:northbit-logo";

const C = {
  ink: "#0B0F14",
  inkSurface: "#14181F",
  inkBorder: "#232931",
  polar: "#F5F2EC",
  frostBg: "#EFEBE3",
  frost: "#D9E1E8",
  signal: "#3A5C1A",
  steel: "#5C6470",
  muted: "#9098A4",
};

const DISPLAY = "'Clash Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif";
const BODY = "'Satoshi','Helvetica Neue',Helvetica,Arial,sans-serif";

export interface EmailContent {
  subject: string;
  preheader: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
  steps?: { title: string; body: string }[];
  /** Founder signoff block. Defaults to true. */
  signoff?: boolean;
  /** Logo image src. Hosted URL by default; pass LOGO_CID for inline attachments. */
  logoSrc?: string;
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function button(label: string, href: string): string {
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate">
  <tr>
    <td class="nb-btn" bgcolor="${C.signal}" style="border-radius:4px;background:${C.signal}">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${esc(href)}" style="height:48px;v-text-anchor:middle;width:240px" arcsize="8%" stroke="f" fillcolor="${C.signal}"><center style="color:${C.polar};font-family:Arial,sans-serif;font-size:15px;font-weight:bold">${esc(label)}</center></v:roundrect><![endif]-->
      <!--[if !mso]><!-->
      <a href="${esc(href)}" style="display:inline-block;padding:15px 26px;font-family:${BODY};font-size:15px;font-weight:700;line-height:18px;color:${C.polar};text-decoration:none;border-radius:4px;letter-spacing:0.01em">${esc(label)}&nbsp;&nbsp;&rarr;</a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`;
}

function stepsBlock(steps: { title: string; body: string }[]): string {
  const rows = steps
    .map(
      (s, i) => `
  <tr>
    <td class="nb-rule" valign="top" width="56" style="padding:20px 0;border-top:1px solid ${C.frost};font-family:${BODY};font-size:13px;font-weight:700;color:${C.signal};letter-spacing:0.04em">${String(i + 1).padStart(2, "0")}</td>
    <td class="nb-rule" valign="top" style="padding:20px 0;border-top:1px solid ${C.frost}">
      <p class="nb-text" style="margin:0 0 4px;font-family:${DISPLAY};font-size:17px;font-weight:600;line-height:1.3;letter-spacing:-0.01em;color:${C.ink}">${esc(s.title)}</p>
      <p class="nb-sub" style="margin:0;font-family:${BODY};font-size:15px;line-height:1.65;color:${C.steel}">${esc(s.body)}</p>
    </td>
  </tr>`,
    )
    .join("");
  return `
<tr><td class="nb-body nb-pad" style="padding:8px 48px 16px;background:${C.polar}">
  <p class="nb-muted" style="margin:0 0 12px;font-family:${BODY};font-size:11px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:${C.muted}">What happens next</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}
  </table>
</td></tr>`;
}

export function renderEmail(c: EmailContent): { html: string; text: string } {
  const logo = c.logoSrc ?? LOGO_URL;

  const paragraphs = c.paragraphs
    .map(
      (p) =>
        `<p class="nb-sub" style="margin:0 0 18px;font-family:${BODY};font-size:16px;line-height:1.7;color:${C.steel}">${esc(p)}</p>`,
    )
    .join("");

  const actions =
    c.cta || c.secondary
      ? `
<tr><td class="nb-body nb-pad" style="padding:12px 48px 40px;background:${C.polar}">
  ${c.cta ? button(c.cta.label, c.cta.href) : ""}
  ${
    c.secondary
      ? `<p style="margin:20px 0 0;font-family:${BODY};font-size:14px;line-height:1.5"><a class="nb-text" href="${esc(c.secondary.href)}" style="color:${C.ink};text-decoration:underline;text-underline-offset:3px">${esc(c.secondary.label)}</a> <span style="color:${C.signal}">&rarr;</span></p>`
      : ""
  }
</td></tr>`
      : "";

  const signoff =
    c.signoff === false
      ? ""
      : `
<tr><td class="nb-body nb-pad" style="padding:24px 48px 48px;background:${C.polar}">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td valign="top" style="padding:6px 14px 0 0"><div style="width:8px;height:8px;background:${C.signal};font-size:0;line-height:0">&nbsp;</div></td>
    <td valign="top">
      <p class="nb-text" style="margin:0;font-family:${DISPLAY};font-size:16px;font-weight:600;letter-spacing:-0.01em;color:${C.ink}">Sean Paul Shamia</p>
      <p class="nb-muted" style="margin:2px 0 0;font-family:${BODY};font-size:14px;color:${C.muted}">Founder &amp; CEO, NorthBit Labs</p>
    </td>
  </tr></table>
</td></tr>`;

  const html = `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${esc(c.subject)}</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
<link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@600&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
<style>
  body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
  table,td{mso-table-lspace:0;mso-table-rspace:0}
  img{border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic}
  a{color:${C.signal}}
  @media (max-width:620px){
    .nb-pad{padding-left:24px!important;padding-right:24px!important}
    .nb-h1{font-size:30px!important}
  }
  @media (prefers-color-scheme:dark){
    .nb-outer{background:${C.ink}!important}
    .nb-body{background:${C.inkSurface}!important}
    .nb-text{color:${C.polar}!important}
    .nb-sub{color:#B9BFC8!important}
    .nb-rule{border-top-color:${C.inkBorder}!important}
  }
  [data-ogsc] .nb-text{color:${C.polar}!important}
  [data-ogsc] .nb-sub{color:#B9BFC8!important}
</style>
</head>
<body class="nb-outer" style="margin:0;padding:0;width:100%;background:${C.frostBg}">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${C.frostBg}">${esc(c.preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" class="nb-outer" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.frostBg}" style="background:${C.frostBg}">
<tr><td align="center" style="padding:40px 12px">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;border-collapse:separate;border-radius:8px;overflow:hidden">

<tr><td class="nb-pad" bgcolor="${C.ink}" style="padding:30px 48px;background:${C.ink}">
  <img src="${esc(logo)}" width="154" height="24" alt="Northbit Labs" style="display:block;width:154px;height:24px;color:${C.polar};font-family:${BODY};font-size:16px;font-weight:700">
</td></tr>

<tr><td class="nb-body nb-pad" style="padding:48px 48px 12px;background:${C.polar}">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px"><tr>
    <td valign="middle" style="padding:0 10px 0 0"><div style="width:8px;height:8px;background:${C.signal};font-size:0;line-height:0">&nbsp;</div></td>
    <td valign="middle" class="nb-muted" style="font-family:${BODY};font-size:11px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:${C.muted}">${esc(c.eyebrow)}</td>
  </tr></table>
  <h1 class="nb-text nb-h1" style="margin:0 0 24px;font-family:${DISPLAY};font-size:38px;font-weight:600;line-height:1.05;letter-spacing:-0.025em;color:${C.ink}">${esc(c.heading)}</h1>
  ${paragraphs}
</td></tr>
${actions}
${c.steps?.length ? stepsBlock(c.steps) : ""}
${signoff}

<tr><td class="nb-pad" bgcolor="${C.ink}" style="padding:32px 48px;background:${C.ink}">
  <p style="margin:0 0 6px;font-family:${BODY};font-size:13px;line-height:1.6;color:${C.polar}">
    <a href="mailto:northbitlabs@gmail.com" style="color:${C.polar};text-decoration:none">northbitlabs@gmail.com</a>
    <span style="color:#4a5260">&nbsp;&middot;&nbsp;</span>
    <a href="tel:+254782403981" style="color:${C.polar};text-decoration:none">+254 782 403 981</a>
  </p>
  <p style="margin:0;font-family:${BODY};font-size:12px;line-height:1.6;color:${C.muted}">Number 8, Nosim Road, Kiserian, Kajiado North, Kenya</p>
  <p style="margin:16px 0 0;font-family:${BODY};font-size:12px;line-height:1.6;color:#4a5260"><a href="https://northbitlabs.tech" style="color:${C.muted};text-decoration:underline">northbitlabs.tech</a></p>
</td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const text = [
    c.heading,
    "",
    ...c.paragraphs.flatMap((p) => [p, ""]),
    ...(c.cta ? [`${c.cta.label}: ${c.cta.href}`, ""] : []),
    ...(c.secondary ? [`${c.secondary.label}: ${c.secondary.href}`, ""] : []),
    ...(c.steps?.length
      ? ["What happens next", ...c.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.body}`), ""]
      : []),
    ...(c.signoff === false ? [] : ["Sean Paul Shamia", "Founder & CEO, NorthBit Labs", ""]),
    "northbitlabs@gmail.com · +254 782 403 981",
    "Number 8, Nosim Road, Kiserian, Kajiado North, Kenya",
  ].join("\n");

  return { html, text };
}
