import { CONTACT } from "@/lib/data";

// Strip everything but digits → WhatsApp wants e.g. 254795684258
const WHATSAPP_NUMBER = CONTACT.phone.replace(/[^0-9]/g, "");

// Pre-filled message the visitor sends you. Edit this line to change it.
const PREFILL_MESSAGE =
  "Hi NorthBit Labs 👋 I'd like to book a discovery call about a software project for my business.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NorthBit Labs on WhatsApp"
      className="wa-fab"
    >
      <span className="wa-fab__label" aria-hidden="true">Chat with us</span>
      <svg className="wa-fab__icon" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.94-5.358 11.943-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>

      <style>{`
        .wa-fab {
          position: fixed;
          right: clamp(16px, 3vw, 28px);
          bottom: clamp(16px, 3vw, 28px);
          z-index: 1000;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: #25D366;
          color: #fff;
          display: grid;
          place-items: center;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(11, 15, 20, 0.45);
          /* GPU-friendly transitions only (transform + box-shadow) */
          transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms ease;
          /* entrance: once per load, after the hero has settled. never from scale(0) */
          animation: wa-in 420ms cubic-bezier(0.23, 1, 0.32, 1) 600ms backwards;
          will-change: transform;
        }

        @keyframes wa-in {
          from { opacity: 0; transform: scale(0.9) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .wa-fab__icon { display: block; }

        /* label is absolutely positioned so it never reflows the circle */
        .wa-fab__label {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: #0B0F14;
          color: #F5F2EC;
          border: 1px solid #232931;
          padding: 9px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 6px 18px rgba(11, 15, 20, 0.4);
          transition: opacity 180ms ease, transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* press feedback — works on touch too */
        .wa-fab:active { transform: scale(0.96); }

        /* keyboard users get the label + a clear ring */
        .wa-fab:focus-visible { outline: 2px solid #25D366; outline-offset: 3px; }
        .wa-fab:focus-visible .wa-fab__label {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* hover only on real pointers, so taps don't trigger a phantom hover */
        @media (hover: hover) and (pointer: fine) {
          .wa-fab:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(11, 15, 20, 0.5), 0 4px 16px rgba(37, 211, 102, 0.35);
          }
          .wa-fab:hover .wa-fab__label {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-fab { animation: none; transition: box-shadow 180ms ease; }
          .wa-fab:hover, .wa-fab:active { transform: none; }
          .wa-fab__label { transform: translateY(-50%); transition: opacity 180ms ease; }
        }
      `}</style>
    </a>
  );
}
