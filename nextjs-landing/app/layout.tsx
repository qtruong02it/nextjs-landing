import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Acme — Build faster, ship with confidence',
  description: 'The modern platform for teams who want clean infrastructure, zero config, and production-ready deploys from day one.',
  openGraph: {
    title: 'Acme — Build faster, ship with confidence',
    description: 'The modern platform for teams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
