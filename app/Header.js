import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

const Header = ({ cartItemCount }) => {
  return (
    <header className={styles.header}>
      <h1>FitGear - Custom Sportswear Shop</h1>
      <nav>
        <Link href="/products" data-test-id="products-link">
          Products
        </Link>
        <Link href="/cart" data-test-id="cart-link">
          Cart (<span data-test-id="cart-count">{cartItemCount}</span>)
        </Link>
      </nav>
    </header>
  );
};

export default Header;
