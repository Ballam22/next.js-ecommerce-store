'use client';

import Link from 'next/link';
import { useState } from 'react';
import { updateCart } from '../../util/cookies';

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type ProductDetailsClientProps = {
  product: Product;
};

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Update the cart for this product
    updateCart(product.id, quantity);
  };

  return (
    <div>
      {/* Product Name as the only <h1> */}
      <h1>{product.name}</h1>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        data-test-id="product-image"
        style={{ width: '300px', display: 'block', marginBottom: '1rem' }}
      />

      {/* Product Price */}
      <div
        data-test-id="product-price"
        style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
      >
        {product.price}
      </div>

      {/* Quantity Input and Add to Cart Button */}
      <div>
        <input
          type="number"
          data-test-id="product-quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          style={{ width: '60px', marginRight: '1rem' }}
        />
        <button onClick={handleAddToCart} data-test-id="product-add-to-cart">
          Add to Cart
        </button>
      </div>

      {/* Link to go back to the products listing */}
      <div style={{ marginTop: '1rem' }}>
        <Link href="/products">Back to Products</Link>
      </div>
    </div>
  );
}
