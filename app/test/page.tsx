// app/test/page.tsx
import { getProducts } from '../database/products';

export default async function TestPage() {
  // Fetch products from the database
  const products = await getProducts();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Database Test</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
