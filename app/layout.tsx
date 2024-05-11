import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import Navbar from './Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const urban = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={urban.className}>
          <Navbar />
        </header>
        <main className={urban.className}>
          {children}
        </main>
      </body>
    </html>
  )
}