import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/cart" data-test-id="cart-link">
        Cart (<span data-test-id="cart-count">0</span>)
      </Link>
    </header>
  );
}
