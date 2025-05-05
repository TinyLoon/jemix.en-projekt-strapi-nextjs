// src/lib/fetcher.ts
export const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetcher<T>(endpoint: string, locale?: string): Promise<T> {
  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
  }

  const langParam = locale
    ? locale === "Deutsch"
      ? "?locale=de"
      : locale === "Spanish"
      ? "?locale=es"
      : "?locale=en"
    : "";

  const url = `${baseURL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}${langParam}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Fetch failed for ${endpoint} (${res.status})`);
  }

  const json = await res.json();

  return json.data;
}