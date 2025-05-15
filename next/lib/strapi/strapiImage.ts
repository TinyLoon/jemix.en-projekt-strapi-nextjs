import { unstable_noStore as noStore } from "next/cache";

/**
 * Wandelt Strapi-relative Bild-URLs in vollständige URLs um.
 */
export function strapiImage(url: string): string {
  noStore(); // verhindert Caching bei Serverfunktionen

  // Prüft auf relative Pfade (z.B. "/uploads/image.png")
  if (url.startsWith("/")) {
    const apiBase = process.env.NEXT_PUBLIC_API_URL;

    // Sonderfall für Strapi-Demo-Domains
    if (!apiBase && typeof document !== "undefined" && document.location.host.endsWith(".strapidemo.com")) {
      return `https://${document.location.host.replace("client-", "api-")}${url}`;
    }

    return `${apiBase}${url}`;
  }

  // Bereits absolute URL
  return url;
}