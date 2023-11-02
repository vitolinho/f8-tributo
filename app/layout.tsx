import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'F8 TRIBUTO',
  description: 'Showcase website for Ferrari F8 TRIBUTO',
}

const Helvetica = localFont({
  src: '../public/fonts/Helvetica.ttf',
  variable: '--font-helvetica',
})

const Monument = localFont({
  src: '../public/fonts/Monument.otf',
  variable: '--font-monument',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${Monument.variable} ${Helvetica.variable}`}>{children}</body>
    </html>
  )
}
