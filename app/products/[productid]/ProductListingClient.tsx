'use client';

import Link from 'next/link';
import { useState } from 'react';
import { updateCart } from '../../util/cookies';
import styles from '../page.module.css';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type Props = {
  products: Product[];
};

export default function ProductsListingClient({ products }: Props) {
  const [cartFeedback, setCartFeedback] = useState('');

  const handleAddToCart = (productId: number, quantity = 1) => {
    updateCart(productId, quantity);
    setCartFeedback(`Added ${quantity} item(s) of ${productId} to cart.`);
    setTimeout(() => setCartFeedback(''), 2000);
  };

  return (
    <div className={styles.productsGrid}>
      {cartFeedback && <p className={styles.feedback}>{cartFeedback}</p>}
      {products.map((product) => (
        <div key={`product-${product.id}`} className={styles.productCard}>
          <Link
            href={`/products/${product.id}`}
            data-test-id={`product-${product.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <h2>{product.name}</h2>
            <img
              src={product.imageUrl} // Fixed naming consistency
              alt={product.name}
              style={{
                width: '200px',
                display: 'block',
                marginBottom: '0.5rem',
              }}
              data-test-id={`product-image-${product.id}`} // Added test ID for consistency
            />
            <p data-test-id={`product-price-${product.id}`}>
              Price: ${product.price}
            </p>
          </Link>
          <button
            onClick={() => handleAddToCart(product.id)}
            data-test-id={`product-add-to-cart-${product.id}`}
            className={styles.button}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
