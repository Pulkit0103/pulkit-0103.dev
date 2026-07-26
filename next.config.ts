import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking — block site from being framed by any origin
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing attacks
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control referrer info sent to external domains
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 2 years, including subdomains (Vercel sets this too, belt-and-suspenders)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Restrict browser feature access
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' required — Next.js 15 injects inline scripts for hydration
      "script-src 'self' 'unsafe-inline'",
      // Inline styles used by Tailwind + Next.js; Google Fonts stylesheet
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts font files
      "font-src 'self' https://fonts.gstatic.com",
      // data: URIs for any inlined SVG/images
      "img-src 'self' data:",
      "connect-src 'self'",
      // Redundant with X-Frame-Options but covers CSP-aware browsers
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Never emit .map files that let visitors reconstruct your TypeScript source
  productionBrowserSourceMaps: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
