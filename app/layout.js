import './globals.css';
import localFont from 'next/font/local';
import Header from './Header.js';

// Load custom fonts
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

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Metadata for the page
export const metadata = {
  title: {
    default: 'Homepage | Ecommerce Store',
    template: 'Homepage | %s',
  },
  description: 'Next.js Ecommerce project',
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Header component */}
        <Header />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <p>© 2025 Ecommerce Store</p>
        </footer>
      </body>
    </html>
  );
}
