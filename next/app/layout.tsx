// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'JEMIX - IT Solutions & Services',
    template: '%s | JEMIX',
  },
  description: 'Modern Web with Next.js and Strapi.',
  openGraph: {
    title: 'JEMIX - IT Solutions & Services',
    description: 'Moderne IT-Infrastruktur & Beratung für Unternehmen, Praxen & Private.',
    url: 'https://jemix.es',
    siteName: 'JEMIX',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JEMIX Hero Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEMIX - IT Solutions & Services',
    description: 'Netzwerk. WLAN. Beratung. Mallorca.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          {children}
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}