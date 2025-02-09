import Link from 'next/link';
import { getProducts } from '../database/products';

export const metadata = {
  title: 'FitGear Products',
  description:
    'FitGear is your go-to online store for premium fitness apparel, workout gear, and accessories. Whether you are hitting the gym, running outdoors, or training at home, we offer the latest in performance-driven fitness products to keep you at the top of your game.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>FitGear Products</h1>
      <ul>
        {products.map((product) => (
          <li key={`product-${product.id}`}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              <img src={product.image_url} alt={product.name} />
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
