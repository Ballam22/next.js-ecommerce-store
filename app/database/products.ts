import { sql } from '../database/connect';

export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products;
}
