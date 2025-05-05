// src/lib/api/services.ts
import { baseURL } from '@/lib/config'

export const getServiceBySlug = async (slug: string) => {
  const res = await fetch(
    `${baseURL}/api/services?filters[slug][$eq]=${slug}&populate=*`,
    { cache: 'no-store' }
  )
  const json = await res.json()
  return json.data?.[0] || null
}
