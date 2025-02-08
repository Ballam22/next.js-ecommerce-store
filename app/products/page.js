import Link from 'next/link';
import sql from '../database/connect';

export default async function ProductsPage() {
  const products = await sql`SELECT * FROM products`;

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
              <p>{product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
