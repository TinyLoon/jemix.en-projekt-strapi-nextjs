// src/lib/api/getServiceBySlug.ts
import { fetcher } from "@/lib/fetcher";

export async function getServiceBySlug(slug: string) {
  try {
    const res = await fetcher(
      `/services?filters[slug][$eq]=${slug}&populate=*`
    );
    return res?.data?.[0] || null;
  } catch (err) {
    console.error("Fehler beim Laden des Service:", err);
    return null;
  }
}
