'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCookie, updateCart } from '../util/cookies';

type CartItem = {
  // Represents an item stored in the cookie cart.
  // Using string for productId to align with how products are keyed.
  quantity: number;
};

// Sample product details; in production, fetch real data (e.g., using SWR or an API route)
const sampleProducts: Record<
  string,
  { name: string; price: number; image_url?: string }
> = {
  product1: {
    name: 'Fitgear pro shirt',
    price: 999,
    image_url: '/images/shirt.jpg',
  },
  product2: {
    name: 'Fitgear FlexFit Leggings',
    price: 199,
    image_url: '/images/leggings.jpg',
  },
  product3: {
    name: 'Fitgear Performance Hoodie',
    price: 49,
    image_url: '/images/hoodie.jpg',
  },
  product4: {
    name: 'Fitgear Training Gloves',
    price: 29,
    image_url: '/images/gloves.jpg',
  },
};

export default function CartPage() {
  // State to hold the cart object (keys: product IDs, values: CartItem)
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [total, setTotal] = useState(0);

  // Function to load cart data from the cookie.
  const loadCart = () => {
    const cartCookie = getCookie('cart');
    if (cartCookie) {
      try {
        const parsedCart = JSON.parse(decodeURIComponent(cartCookie));
        setCart(parsedCart);
      } catch (err) {
        console.error('Error parsing cart cookie', err);
        setCart({});
      }
    } else {
      setCart({});
    }
  };

  // Load the cart when the component mounts and when the custom 'cartUpdated' event fires.
  useEffect(() => {
    loadCart();
    const handleCartUpdate = () => loadCart();
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  // Calculate the total whenever the cart changes.
  useEffect(() => {
    let newTotal = 0;
    for (const productId in cart) {
      const item = cart[productId];
      const price = sampleProducts[productId]?.price || 0;
      if (item) {
        newTotal += price * item.quantity;
      }
    }
    setTotal(newTotal);
  }, [cart]);

  // Remove a product from the cart.
  const handleRemove = (productId: string) => {
    // Remove the product from the cart object.
    const updatedCart = { ...cart };
    const removedQuantity = updatedCart[productId]?.quantity || 0;
    delete updatedCart[productId];

    // Update the cookie by subtracting the product's quantity.
    updateCart(productId, -removedQuantity);
    setCart(updatedCart);
  };

  return (
    <main>
      <h1>Your Cart</h1>
      <ul>
        {Object.entries(cart).map(([productId, item]) => {
          const product = sampleProducts[productId];
          return (
            <li
              key={`cart-product-${productId}`}
              data-test-id={`cart-product-${productId}`}
              style={{
                marginBottom: '1rem',
                listStyle: 'none',
                borderBottom: '1px solid #cccccc',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <strong>{product ? product.name : productId}</strong>
              </div>
              <div data-test-id={`cart-product-quantity-${productId}`}>
                {item.quantity}
              </div>
              <div>Subtotal: {product ? product.price * item.quantity : 0}</div>
              <button
                onClick={() => handleRemove(productId)}
                data-test-id={`cart-product-remove-${productId}`}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div style={{ marginTop: '1rem' }}>
        <strong>Total: </strong>
        <span data-test-id="cart-total">{total}</span>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link href="/checkout" data-test-id="cart-checkout">
          <div>
            <button>Checkout</button>
          </div>
        </Link>
      </div>
    </main>
  );
}
