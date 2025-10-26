import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aura✧ - Professional Trading Indicators',
  description: 'Automate Quarterly Theory and Smart Money Technique with professional TradingView indicators',
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
