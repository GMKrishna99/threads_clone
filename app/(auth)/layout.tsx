import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import '../globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Threads Clone crated by GMK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${nunito.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
