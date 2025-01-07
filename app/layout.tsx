import './globals.css'
import type { Metadata } from 'next'
import { GFS_Didot } from 'next/font/google'

const gfsDidot = GFS_Didot({
  weight: '400',
  subsets: ['greek'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Η τέχνη της χειραγώγησης | Ebook',
  description: 'Ανακαλύψτε τα μυστικά της ανθρώπινης ψυχολογίας και της επιρροής',
}

export default function RootLayout({
 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <body className={gfsDidot.className}>{children}</body>
    </html>
  )
}