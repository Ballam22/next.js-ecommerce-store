import './globals.css';
// app/layout.js (or layout.tsx)
import Header from './header';

export const metadata = {
  title: 'FitGear Ecommerce',
  description: 'Your home for premium fitness gear.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        style={{
          backgroundImage: "url('/images/athletes.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
