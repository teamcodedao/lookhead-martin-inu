import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const font = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lockheed Martin Inu',
  description: 'Lockheed Martin Inu. Drop Love Bombs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(font.className)}>{children}</body>
    </html>
  );
}
