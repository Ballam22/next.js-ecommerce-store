import './globals.css';
import Header from './header';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: {
    default: 'Homepage | E-Store',
    Template: '%s | E-Store',
  },
  description: 'Your home for premium fitness gear.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Homepage | E/store</title>
        <meta
          name="description"
          content="Your home for premium fitness gear."
        />
      </head>
      <body
        style={{
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
