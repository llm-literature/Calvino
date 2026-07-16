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
  title: 'Calvino — Digital Experiments',
  description: '以数字创意重新进入伊塔洛·卡尔维诺的文学世界。',
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
