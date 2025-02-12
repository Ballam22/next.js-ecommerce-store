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
          <li key={product.id}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              <img src={product.image_url} alt={product.name} width="100" />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
// The ProductsPage component fetches a list of products from the database and renders them in a list. Each product is displayed as an image, name, and price, with a link to the product detail page. The metadata object defines the title and description of the page, which can be used for SEO purposes.
