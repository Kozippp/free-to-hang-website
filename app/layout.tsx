import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free to Hang - Make hanging out with friends easier',
  description: 'Free to Hang app makes hanging out with friends easier. Plan events, invite friends and find free time to spend together.',
  keywords: 'friends, hangouts, events, planning, Free to Hang',
  authors: [{ name: 'Free to Hang Team' }],
  openGraph: {
    title: 'Free to Hang - Make hanging out with friends easier',
    description: 'Free to Hang app makes hanging out with friends easier. Plan events, invite friends and find free time to spend together.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free to Hang - Make hanging out with friends easier',
    description: 'Free to Hang app makes hanging out with friends easier. Plan events, invite friends and find free time to spend together.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 