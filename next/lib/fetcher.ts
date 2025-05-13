export async function fetcher(url: string, init?: RequestInit) {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

  const res = await fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...init,
    next: { revalidate: 60 }, // optional: ISR support
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`❌ Fetcher error (${res.status}): ${errorText}`);
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}