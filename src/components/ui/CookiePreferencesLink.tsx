"use client";
import { REOPEN_EVENT } from "@/components/ui/CookieConsent";

export default function CookiePreferencesLink({
  label = "Cookie Preferences",
  muted = false,
}: {
  label?: string;
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      className="foot-link"
      style={{
        fontSize: muted ? 12 : 15,
        color: muted ? "#4a5260" : "#F5F2EC",
        letterSpacing: muted ? "0.06em" : undefined,
        background: "none",
        border: "none",
        padding: 0,
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
    >
      {label}
    </button>
  );
}
