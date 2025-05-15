// lib/strapi/strapiImage.ts

import { unstable_noStore as noStore } from 'next/cache';

/**
 * Gibt die vollständige Bild-URL zurück – ergänzt mit API-BaseURL, falls nötig.
 */
export function strapiImage(url?: string): string {
  noStore(); // verhindert Caching in Next.js

  if (!url) return "";

  // Bereits absolute URL → direkt zurückgeben
  if (url.startsWith("http")) return url;

  // Relativer Pfad → Base-URL hinzufügen
  if (url.startsWith("/")) {
    const base = process.env.NEXT_PUBLIC_API_URL;

    // Sonderfall für Strapi Demo-Domains
    if (!base && typeof window !== "undefined" && window?.location?.host?.endsWith(".strapidemo.com")) {
      return `https://${window.location.host.replace("client-", "api-")}${url}`;
    }

    if (!base) {
      console.warn("⚠️ process.env.NEXT_PUBLIC_API_URL fehlt – relative Bild-URL kann nicht aufgelöst werden.");
      return url;
    }

    return `${base}${url}`;
  }

  return url;
}