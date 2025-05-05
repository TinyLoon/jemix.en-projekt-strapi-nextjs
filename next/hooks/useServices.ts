// src/hooks/useServices.ts
import { useQuery } from '@tanstack/react-query'
import { baseURL } from '@/lib/config'

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/api/services?populate=*`)
      if (!res.ok) throw new Error('Fehler beim Laden der Services')
      const json = await res.json()
      return json.data
    }
  })
}
