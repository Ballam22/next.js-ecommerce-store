import { cache } from 'react';
import { sql } from '../database/connect';

// Function to create products table
export const createProductsTable = cache(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id serial PRIMARY KEY,
      name varchar(255) UNIQUE NOT NULL,
      price numeric NOT NULL,
      / / function TO insert products (run createproductstable first)
    );
  `;
});

type Product = {
  id: number;
  name: string;
  image_url: string;
  price: number;
};

// Function to insert products (Run this manually first)
export const insertProducts = cache(async () => {
  await sql`
    INSERT INTO
      products (id, name, price, image_url)
    VALUES
      (
        'FitGear Pro Shirt',
        29.99,
        '/public/shirt.jpg'
      ) (
        'FlexFit Leggings',
        49.99,
        '/public/leggings.jpg'
      ) (
        'Performance Hoodie',
        59.99,
        '/public/hoodie.jpg'
      ) (
        'Training Gloves',
        19.99,
        '/public/gloves.jpg'
      )
    ON CONFLICT (name) DO NOTHING;

    -- Avoid duplicate entries
  `;
});
