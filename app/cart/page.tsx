// app/cart/Page.tsx
// This file is a Server Component (no "use client" directive here)
// import { metadata } from '../../metadata'; // Or define metadata here if needed
import CartClient from './CartClient';

export const metadata = {
  title: 'Cart Page',
  description:
    'Review the items in your cart before checkout. FitGear offers premium fitness apparel and accessories to enhance your workout experience. Secure your favorite gear today!',
};

export default function CartPage() {
  // Simply render the interactive client component
  return <CartClient />;
}
