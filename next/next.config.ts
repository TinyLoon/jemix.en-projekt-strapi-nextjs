// next.config.ts
import { i18n } from './i18n.config';
import type { Redirect } from 'next';

const nextConfig = {
  i18n,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOSTNAME || 'localhost',
      },
    ],
  },

  pageExtensions: ['ts', 'tsx'],

  async redirects(): Promise<Redirect[]> {
    let redirections: Redirect[] = [];
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/redirections`
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const result = await res.json();

      const redirectItems: Redirect[] = result.data.map(
        (item: { source: string; destination: string }) => ({
          source: `/:locale${item.source}`,
          destination: `/:locale${item.destination}`,
          permanent: false,
        })
      );

      redirections = redirectItems;
    } catch (error) {
      console.error('❌ Fehler beim Laden der Redirects:', error);
    }

    return redirections;
  },
};

export default nextConfig;