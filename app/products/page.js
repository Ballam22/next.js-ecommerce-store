import './page.module.css'; // Ensure your CSS module is imported
import Link from 'next/link';
import ProductsListingClient from './[productid]/ProductListingClient';

// If you need static products data, you can keep it here or fetch it from your database.
const products = [
  {
    id: 'product1',
    name: 'Fitgear Pro shirt',
    image: '/images/shirt.jpg',
    price: 29.99,
  },
  {
    id: 'product2',
    name: 'Fitgear FlexFit Leggings',
    image: '/images/leggings.jpg',
    price: 49.99,
  },
  {
    id: 'product3',
    name: 'Fitgear Performance Hoodie',
    image: '/images/hoodie.jpg',
    price: 59.99,
  },
  {
    id: 'product4',
    name: 'Fitgear Training Gloves',
    image: '/images/gloves.jpg',
    price: 29.99,
  },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Products</h1>
      <Link href="/products">Back to Products</Link>
      {/* Render the interactive client component */}
      <ProductsListingClient products={products} />
    </main>
  );
}
