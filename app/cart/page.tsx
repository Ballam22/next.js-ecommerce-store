// app/cart/Page.tsx
// This file is a Server Component (no "use client" directive here)
import CartClient from './CartClient';

export const metadata = {
  title: 'Cart Page',
  description:
    'Review the items in your cart before checkout. FitGear offers premium fitness apparel and accessories to enhance your workout experience. Secure your favorite gear today!',
};

export default function CartPage() {
  return (
    <main>
      <div className="cart-container">
        <CartClient />
      </div>
    </main>
  );
}
