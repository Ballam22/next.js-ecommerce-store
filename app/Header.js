// app/header.js
'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { getCartCount } from './util/cookies';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const count = getCartCount();
    setCartCount(count);
  };

  useEffect(() => {
    // Initial count when component mounts
    updateCartCount();

    // Listen for a custom "cartUpdated" event and update the count
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  return (
    <header className={styles.header}>
      {' '}
      {/* Apply the SCSS class */}
      <nav>
        <Link href="/" data-test-id="products-link">
          Home
        </Link>
        {' | '}
        <Link href="/products" data-test-id="products-link">
          Products
        </Link>
        {' | '}
        <Link href="/cart" data-test-id="cart-link">
          <ShoppingCart size={20} /> {/* Cart Icon*/}(
          <span data-test-id="cart-count">{cartCount}</span>)
        </Link>
      </nav>
    </header>
  );
};

export default Header;
