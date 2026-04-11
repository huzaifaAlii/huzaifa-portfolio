import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Huzaifa Ali - Software Engineer',
  description: 'Full-Stack Developer | Building Scalable Solutions | React • Next.js • Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream-300 text-dark">
        {children}
      </body>
    </html>
  )
}
