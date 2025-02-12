import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

export default function Header({ cartItemCount }) {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products" data-test-id="products-link">
          Products
        </Link>
        <Link href="/cart" data-test-id="cart-link">
          Cart (<span data-test-id="cart-count">{cartItemCount}</span>)
        </Link>
      </nav>
    </header>
  );
}
