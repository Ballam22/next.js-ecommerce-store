// app/checkout/Page.tsx
import CheckOutForm from './checkOutForm';

export const metadata = {
  title: 'Checkout Page',
  description:
    'Enter your shipping and payment information to complete your purchase at FitGear.',
};

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>
      <CheckOutForm />
    </main>
  );
}
