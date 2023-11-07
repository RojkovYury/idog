import './globals.css';
import type { Metadata } from 'next'
import { ReactNode } from 'react';
import { Amatic_SC } from 'next/font/google'

const amatic_SC = Amatic_SC({ subsets: ['cyrillic'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'title meta layout',
  description: 'description meta layout',
}

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="ru">
      <body className={amatic_SC.className}>
        {children}
      </body>
    </html>
  )
}

// <body className={font.className} style={{margin: 0, background: '#F8F3F0'}} >