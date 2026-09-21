"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

type Consent = "accepted" | "declined";
const STORAGE_KEY = "nb_cookie_consent";
export const REOPEN_EVENT = "nb:open-cookie-prefs";

type GtagConsent = { analytics_storage: "granted" | "denied" };

/**
 * Google Consent Mode v2. GA4 loads for every visitor, but the root layout
 * defaults all consent signals to "denied", so before acceptance GA only sends
 * cookieless, anonymous pings (modeled traffic - no cookies). Accepting flips
 * `analytics_storage` to "granted" (full, cookie-based measurement).
 *
 * Microsoft Clarity (session recording - more invasive, sets cookies) stays
 * strictly gated: its script renders only after an explicit accept.
 */
function updateConsent(state: GtagConsent["analytics_storage"]) {
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof g === "function") {
    g("consent", "update", { analytics_storage: state });
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
      // Re-assert the prior choice against Consent Mode's denied default.
      updateConsent(stored === "accepted" ? "granted" : "denied");
    } else {
      setOpen(true);
    }

    const reopen = () => setOpen(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function choose(next: Consent) {
    window.localStorage.setItem(STORAGE_KEY, next);
    setConsent(next);
    setOpen(false);
    updateConsent(next === "accepted" ? "granted" : "denied");
  }

  return (
    <>
      {/*
        GA4 loads for everyone. It honors the Consent Mode default set in the
        root layout: cookieless pings until `analytics_storage` is granted on
        accept. `gtag` and `dataLayer` are already defined globally in <head>.
      */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-16N31NC7BL" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.gtag('config', 'G-16N31NC7BL');`}
      </Script>

      {/* Clarity is only injected after an explicit accept. */}
      {consent === "accepted" && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "y7jd0es8om");`}
        </Script>
      )}

      {open && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie preferences" aria-live="polite">
          <p className="cookie-banner__title">Cookies</p>
          <p className="cookie-banner__body">
            We use anonymous, cookieless analytics by default. Accept to enable full
            Google Analytics and Microsoft Clarity (with cookies) so we can see how
            the site is used and improve it. Nothing is sold. See our{" "}
            <Link href="/privacy" className="inline-link" style={{ textDecoration: "underline" }}>
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="cookie-banner__actions">
            <button type="button" className="btn btn-ghost--light" onClick={() => choose("declined")}>
              Decline
            </button>
            <button type="button" className="btn btn-signal" onClick={() => choose("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}

      <style>{`
        .cookie-banner {
          position: fixed;
          left: clamp(16px, 3vw, 28px);
          right: clamp(16px, 3vw, 28px);
          bottom: clamp(16px, 3vw, 28px);
          z-index: 1001;
          max-width: 400px;
          background: #0B0F14;
          color: #F5F2EC;
          border: 1px solid #232931;
          border-radius: 8px;
          padding: 22px;
          box-shadow: 0 12px 34px rgba(11, 15, 20, 0.45);
          animation: cookie-in 380ms cubic-bezier(0.23, 1, 0.32, 1) backwards;
        }
        @keyframes cookie-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cookie-banner__title {
          font-family: var(--font-satoshi), system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7BA84F;
          margin-bottom: 10px;
        }
        .cookie-banner__body {
          font-size: 14px;
          color: #AAB2BC;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .cookie-banner__actions {
          display: flex;
          gap: 10px;
        }
        .cookie-banner__actions .btn {
          padding: 10px 18px;
          font-size: 14px;
        }
        @media (prefers-reduced-motion: reduce) {
          .cookie-banner { animation: none; }
        }
        @media (max-width: 480px) {
          .cookie-banner { max-width: none; }
        }
      `}</style>
    </>
  );
}
