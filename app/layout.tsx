import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitor Gap Finder',
  description: 'Market gap and competitor analysis',
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
