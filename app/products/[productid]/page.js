import { useState } from 'react';
import sql from '../../database/connect';

export default async function ProductPage({ params }) {
  const { productid } = params;
  const [product] = await sql` ${productid}`;
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Logic to update the cart cookie
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image_url}
        alt={product.name}
        data-test-id="product-image"
      />
      <p data-test-id="product-price">{product.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        data-test-id="product-quantity"
      />
      <button onClick={addToCart} data-test-id="product-add-to-cart">
        Add to Cart
      </button>
    </div>
  );
}
