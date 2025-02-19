'use client';

import { useState, useEffect } from 'react';

// Define styles before the component uses them.
const footerStyles = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '1rem',
    marginTop: 'auto',
  },
  text: {
    margin: 0,
  },
};

export default function Footer() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

  useEffect(() => {
    const consent = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookiesAccepted='));
    if (consent && consent.split('=')[1] === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  return (
    <footer style={footerStyles.container}>
      {cookiesAccepted ? (
        <p style={footerStyles.text}>
          © {new Date().getFullYear()} FitGear. All rights reserved.
        </p>
      ) : (
        <p style={footerStyles.text}>
          Please accept cookies to see our full footer content.
        </p>
      )}
    </footer>
  );
}
