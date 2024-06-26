import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { logoutAction } from '@/lib/action';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'ToyProject Next App %s',
    default: 'ToyProject Next App',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main>
          {children}
          <form action={logoutAction}>
            <button className="text-white">로그아웃</button>
          </form>
        </main>
      </body>
    </html>
  );
}
