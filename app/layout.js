// app/layout.js
import './globals.css';
import Header from './header';

export const metadata = {
  title: 'Fitgear Ecommerce',
  description: 'Your store for fitness gear',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Additional meta tags can be added here */}</head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
