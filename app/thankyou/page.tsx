// app/ThankYou/Page.tsx
export const metadata = {
  title: 'Thank you for your order - FitGear',
  description:
    'Your order has been successfully placed. Thank you for shopping with FitGear!',
};

export default function ThankYouPage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Thank you for your order</h1>
      <p>Your order has been successfully placed. enjoy your new gear!</p>
    </main>
  );
}
