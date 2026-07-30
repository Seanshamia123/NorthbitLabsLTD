/**
 * NorthBit Labs logo — vector geometry taken directly from the approved
 * brand-guide lockup (Northbit Labs Logo/SVG/Northbit Labs Main Logo.svg),
 * recolored to the exact brand hex values (the guide's own files ship with
 * #0f1115/#3c5d2c, slightly off the documented #0B0F14/#3A5C1A).
 *
 * Full lockup viewBox: 0 0 698.46 187.3 (mark + "Northbit Labs" wordmark).
 * Mark-only crop: 46.97 46.97 124.95 93.94 (bbox of the green N glyph),
 * used for iconOnly renders (favicons, compact nav, etc).
 *
 * The green mark never changes color between variants (brand guide: never
 * interchange the colors unless prescribed). Only the wordmark ink swaps
 * between Ink Black (for light backgrounds) and Polar cream (for solid
 * dark backgrounds), per the guide's "Do's" page.
 *
 * Props:
 *   variant  — "light" | "dark"  (background this instance sits on)
 *   size     — "sm" | "md" | "lg"
 *   iconOnly — render the mark only, no wordmark
 */

const MARK_PATHS = (
  <>
    <path d="M127.19,46.97h44.73v87.58c0,3.51-2.85,6.36-6.36,6.36h-38.37V46.97h0Z" />
    <polygon points="149.56 140.91 89.13 140.91 46.97 94.47 46.97 62.5 82.14 62.5 149.56 140.91" />
    <polygon points="68.53 140.91 46.97 140.91 46.97 119.35 68.53 140.91" />
  </>
);

const WORDMARK_PATHS = (
  <>
    <path d="M218.89,117.08v-46.28h11.05l14.99,23.21,3.87,6.22h.69l-.14-6.22v-23.21h10.36v46.28h-11.05l-14.36-21.89-4.49-7.11h-.69l.13,7.11v21.89h-10.36Z" />
    <path d="M264.3,99.74c0-11.05,6.63-18.1,17.82-18.1s17.61,7.05,17.61,18.1-6.49,18.03-17.61,18.03-17.82-7.05-17.82-18.03ZM289.65,99.74c0-6.77-1.93-8.98-7.53-8.98s-7.59,2.21-7.59,8.98,1.93,8.91,7.59,8.91,7.53-2.21,7.53-8.91Z" />
    <path d="M304.45,117.08v-34.74h9.6v5.6h.42c1.73-3.52,4.83-6.29,9.74-6.29,7.26,0,9.95,5.39,9.95,12.36v3.18h-10.29v-1.86c0-3.73-1.18-4.9-4.42-4.9s-4.7,1.11-4.7,4.9v21.76h-10.29Z" />
    <path d="M341.49,105.68v-14.78h-5.53v-8.57h5.8l1.93-8.08h8.15v8.08h9.81v8.57h-9.81v13.61c0,3.04,1.03,3.38,5.52,3.38h4.29v8.64c-1.66.34-4.35.69-6.77.69-9.05,0-13.4-3.32-13.4-11.53Z" />
    <path d="M366.65,117.08v-46.28h10.29v16.92h.42c1.86-3.25,5.66-6.08,11.19-6.08,8.98,0,12.71,6.01,12.71,13.4v22.03h-10.36v-19.96c0-4.83-1.59-6.56-6.84-6.56-4.97,0-7.11,1.66-7.11,6.91v19.62h-10.29Z" />
    <path d="M407.35,117.08v-46.28h10.29v16.37h.42c1.59-2.9,5.31-5.53,10.57-5.53,9.53,0,14.57,7.11,14.57,18.1s-5.04,18.03-14.5,18.03c-5.39,0-9.53-2.07-11.4-5.8h-.34v5.11h-9.6ZM425.31,108.93c5.94,0,7.6-2.9,7.6-9.19s-1.59-9.26-7.6-9.26c-4.9,0-7.67,1.73-7.67,6.43v5.59c0,4.7,2.76,6.43,7.67,6.43Z" />
    <path d="M447.5,78.4l-.13-7.6h10.29v7.6h-10.16ZM447.5,117.08v-34.74h10.36v34.74h-10.36Z" />
    <path d="M466.09,105.68v-14.78h-5.53v-8.57h5.8l1.93-8.08h8.15v8.08h9.81v8.57h-9.81v13.61c0,3.04,1.03,3.38,5.52,3.38h4.29v8.64c-1.66.34-4.35.69-6.77.69-9.05,0-13.4-3.32-13.4-11.53Z" />
    <path d="M504.31,117.08v-46.28h10.36v36.95h23.9v9.32h-34.26Z" />
    <path d="M541.42,108.24c0-5.39,3.86-8.7,11.05-9.81l11.88-1.79v-1.11c0-4.07-2.21-4.83-6.29-4.83s-5.87,1.18-5.87,4.7v.76h-9.88v-.76c0-8.29,6.42-13.75,16.23-13.75s15.61,5.6,15.61,14.85v20.58h-9.6v-4.7h-.42c-1.86,2.56-5.39,5.39-11.81,5.39s-10.91-3.25-10.91-9.53ZM555.78,109.9c4.21,0,8.57-1.11,8.57-6.49l-9.95,1.52c-2.14.35-3.1,1.03-3.1,2.49,0,1.86,1.45,2.49,4.49,2.49Z" />
    <path d="M580.33,117.08v-46.28h10.29v16.37h.42c1.59-2.9,5.31-5.53,10.57-5.53,9.53,0,14.57,7.11,14.57,18.1s-5.04,18.03-14.5,18.03c-5.39,0-9.53-2.07-11.4-5.8h-.34v5.11h-9.6ZM598.28,108.93c5.94,0,7.6-2.9,7.6-9.19s-1.59-9.26-7.6-9.26c-4.9,0-7.67,1.73-7.67,6.43v5.59c0,4.7,2.76,6.43,7.67,6.43Z" />
    <path d="M620.34,105.27v-.21h9.88v1.45c0,2.56,1.52,3.11,6.56,3.11,4.21,0,4.9-.62,4.9-2.35,0-1.86-.97-2.28-5.6-3.11l-5.25-.97c-6.84-1.24-10.57-4.14-10.57-10.57s5.25-10.98,15.12-10.98c8.5,0,14.99,4.01,14.99,11.81v.97h-9.88v-.97c0-2.28-.97-3.52-5.39-3.52-4.14,0-5.11.9-5.11,2.56s.62,2.14,4.77,2.97l6.36,1.31c7.32,1.38,10.36,4.7,10.36,10.36,0,6.49-5.32,10.64-14.92,10.64-10.91,0-16.23-4.08-16.23-12.5Z" />
  </>
);

const FULL_VIEWBOX = "0 0 698.46 187.3";
const FULL_ASPECT = 698.46 / 187.3;

const MARK_VIEWBOX = "46.97 46.97 124.95 93.94";
const MARK_ASPECT = 124.95 / 93.94;

const HEIGHTS = {
  sm: 22,
  md: 28,
  lg: 40,
};

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

export default function NorthBitLogo({
  variant = "light",
  size = "md",
  iconOnly = false,
}: LogoProps) {
  const height = HEIGHTS[size];
  const wordmarkFill = variant === "light" ? "#0B0F14" : "#F5F2EC";

  if (iconOnly) {
    const width = height * MARK_ASPECT;
    return (
      <svg
        viewBox={MARK_VIEWBOX}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Northbit Labs"
        style={{ display: "block", flexShrink: 0 }}
      >
        <g fill="#3A5C1A">{MARK_PATHS}</g>
      </svg>
    );
  }

  const width = height * FULL_ASPECT;
  return (
    <svg
      viewBox={FULL_VIEWBOX}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Northbit Labs"
      style={{ display: "block", flexShrink: 0 }}
    >
      <g fill={wordmarkFill}>{WORDMARK_PATHS}</g>
      <g fill="#3A5C1A">{MARK_PATHS}</g>
    </svg>
  );
}
