import { cookies } from 'next/headers';
import { getProducts } from '../database/products';

export const metadata = {
  title: 'Cart Page',
  description: 'Next.js Ecommerce project',
};

export default async function CartPage() {
  // Get cart data from cookies
  const cartCookie = cookies().get('cart')?.value;
  const cartItems = cartCookie ? JSON.parse(cartCookie) : [];

  // Fetch product data from the database
  const products = await getProducts();

  // Map cart items to full product details
  const cartWithDetails = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return {
      ...item,
      name: product?.name || 'Unknown Product',
      price: product?.price || 0,
      image_url: product?.image_url || '',
    };
  });

  // Calculate total price
  const totalPrice = cartWithDetails.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1>Your Cart</h1>
      {cartWithDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartWithDetails.map((item) => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.name} width="100" />
              <h2>{item.name}</h2>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}
