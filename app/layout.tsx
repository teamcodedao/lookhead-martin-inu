import type {Metadata} from 'next';
import {Single_Day, Bebas_Neue} from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const font = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
});

const singleDayFont = Single_Day({
  weight: ['400'],
  variable: '--single-day-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAGA WIF',
  description: 'Make America Great Again!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(font.className, singleDayFont.variable)}>
        {children}
      </body>
    </html>
  );
}
