export async function getHomepage() {
  const res = await fetch("http://localhost:1337/api/homepage?populate[hero][populate]=*&populate[aboutUs][populate]=*", {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.data?.attributes;
}