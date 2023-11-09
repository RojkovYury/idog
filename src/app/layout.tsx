'use server';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Theme from '@/theme';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'title meta layout',
    description: 'description meta layout',
  }
}

export default async function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="ru">
      <Theme>
          {children}
      </Theme>
    </html>
  )
}