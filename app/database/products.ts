import { cache } from 'react';
import { sql } from '../database/connect';

// Function to create the products table
export const createProductsTable = cache(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id serial PRIMARY KEY,
      name varchar(255) UNIQUE NOT NULL,
      price numeric(10, 2) NOT NULL,
      image_url varchar(255) NOT NULL
    );
  `;
});

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

// Function to insert products (Run this manually first)
export const insertProducts = cache(async () => {
  await sql`
    INSERT INTO
      products (name, price, image_url)
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

// Function to fetch all products
export const getProducts = cache(async () => {
  return await sql<Product[]>`
    SELECT
      id,
      name,
      image_url AS "imageUrl",
      price::float AS price
    FROM
      products;
  `;
});
