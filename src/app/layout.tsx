import type { Metadata } from 'next'
import RootLayout from '@/components/layout/RootLayout'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Tattoo Studio Portfolio',
  description: 'Professional tattoo studio showcasing our work and booking appointments',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}