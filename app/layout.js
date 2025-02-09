import './globals.css';
import localFont from 'next/font/local';
import Header from './Header.js';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Homepage | Ecommerce Store',
  description: 'Next.js Ecommerce project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
