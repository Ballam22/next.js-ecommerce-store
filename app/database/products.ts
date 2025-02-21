import { cache } from 'react';
import { sql } from '../database/connect';

/**
 * Creates the products table if it does not exist.
 */
export const createProductsTable = cache(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id serial PRIMARY KEY,
      name varchar(255) UNIQUE NOT NULL,
      price numeric(10, 2) NOT NULL,
      imageurl varchar(255) NOT NULL -- Use "imageurl" (NO underscore)
    );
  `;
});

/**
 * Defines the Product type structure.
 */
export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

/**
 * Inserts products into the database if they do not already exist.
 */
export const insertProducts = cache(async () => {
  await sql`
    INSERT INTO
      products (name, price, imageurl)
    VALUES
      (
        'Fitgear Pro Shirt',
        29.99,
        '/images/shirt.jpg'
      ),
      (
        'Fitgear FlexFit Leggings',
        49.99,
        '/images/leggings.jpg'
      ),
      (
        'Fitgear Performance Hoodie',
        59.99,
        '/images/hoodie.jpg'
      ),
      (
        'Fitgear Training Gloves',
        19.99,
        '/images/gloves.jpg'
      )
    ON CONFLICT (name) DO NOTHING;
  `;
});

/**
 * Fetch all products (used for product listing page).
 */
export async function getProducts() {
  return await sql<Product[]>`
    SELECT
      id,
      name,
      imageurl AS "imageUrl",
      price::float AS price
    FROM
      products;
  `;
}

/**
 * Fetch a single product by ID (used for product details page).
 * @param productid - The ID of the product to fetch.
 */
export async function getProductById(productid: number) {
  const result = await sql<Product[]>`
    SELECT
      id,
      name,
      imageurl AS "imageUrl",
      price::float AS price
    FROM
      products
    WHERE
      id = ${productid}
    LIMIT
      1;
  `;

  return result.length > 0 ? result[0] : null;
}
