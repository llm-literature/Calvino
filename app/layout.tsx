import './globals.css'
import type { Metadata } from 'next'
import { Cinzel, Lora } from 'next/font/google'
import React from 'react'
import { Providers } from './providers'
import ClientLayout from './framework/ClientLayout'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://calvino.mathewshen.me'),
  title: {
    default: 'Calvino — Digital Experiments',
    template: '%s — Calvino',
  },
  description: '以数字创意重新进入伊塔洛·卡尔维诺的文学世界。',
  openGraph: {
    title: 'Calvino — Digital Experiments',
    description: '以数字创意重新进入伊塔洛·卡尔维诺的文学世界。',
    siteName: 'Calvino',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/social-card.png',
        width: 1200,
        height: 630,
        alt: 'Calvino — Digital Experiments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calvino — Digital Experiments',
    description: '以数字创意重新进入伊塔洛·卡尔维诺的文学世界。',
    images: [
      {
        url: '/social-card.png',
        width: 1200,
        height: 630,
        alt: 'Calvino — Digital Experiments',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lora.variable}`}>
      <body className="bg-stone-50 font-serif text-stone-900 antialiased selection:bg-amber-200 selection:text-amber-900">
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
