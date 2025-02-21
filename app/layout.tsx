import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <main className='max-w-[1280px] mx-auto'>{children}</main>
      </body>
    </html>
  );
}
