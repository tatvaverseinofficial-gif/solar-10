import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4zM4.8 20V9.8h3.4V20H4.8zM10.2 20V9.8h3.2v1.4h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5V20h-3.4v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V20h-3.6z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23 12.2s0-3.4-.4-5c-.2-1-1-1.8-2-2C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.4c-1 .2-1.8 1-2 2C1 8.8 1 12.2 1 12.2s0 3.4.4 5c.2 1 1 1.8 2 2 1.7.4 8.6.4 8.6.4s6.9 0 8.6-.4c1-.2 1.8-1 2-2 .4-1.6.4-5 .4-5zM9.8 15.5v-6.6l5.8 3.3-5.8 3.3z" />
    </svg>
  );
}
