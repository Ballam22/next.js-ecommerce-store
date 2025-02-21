import type { Sql } from 'postgres';

const products = [
  {
    name: 'Fitgear Pro Shirt',
    image: '/images/shirt.jpg',
    price: 29.99,
    description: `<b>Lightweight and breathable training shirt.</b><div><br /></div><div>Designed for ultimate comfort and flexibility, the Fitgear Pro Shirt keeps you dry and comfortable during intense workouts.</div>`,
  },
  {
    name: 'Fitgear FlexFit Leggings',
    image: '/images/leggings.jpg',
    price: 49.99,
    description: `<b>High-performance leggings for maximum mobility.</b><div><br /></div><div>Squat-proof, stretchable, and sweat-wicking fabric designed for any workout.</div>`,
  },
  {
    name: 'Fitgear Performance Hoodie',
    image: '/images/hoodie.jpg',
    price: 59.99,
    description: `<b>Stay warm and stylish with the Fitgear Performance Hoodie.</b><div><br /></div><div>Made with moisture-wicking material to keep you comfortable before and after training.</div>`,
  },
  {
    name: 'Fitgear Training Gloves',
    image: '/images/gloves.jpg',
    price: 19.99,
    description: `<b>Enhance grip and protect your hands.</b><div><br /></div><div>Designed with padded palms and adjustable wrist straps for maximum support during weight training.</div>`,
  },
];

export async function up(sql: Sql) {
  await sql`
    INSERT INTO
      products (name, image, price,)
    VALUES
      ${sql(
      products.map((product) => [
        product.name,
        product.image,
        product.price,
        product.description,
      ]),
    )}
    ON CONFLICT (name) DO NOTHING;
  `;
}

export async function down(sql: Sql) {
  await sql`
    DELETE FROM products
    WHERE
      name IN (
        ${sql(products.map((product) => product.name))}
      );
  `;
}
