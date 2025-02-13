// app/products/Page.js
import Link from 'next/link';

const products = [
  {
    id: 'product1',
    name: 'Fitgear pro shirt',
    image: 'public/images/shirt.jpg',
    price: 999,
  },
  {
    id: 'product2',
    name: 'Fitgear FlexFit Leggings ',
    image: '/images/leggings.jpg',
    price: 49.99,
  },
  {
    id: 'product3',
    name: 'Fitgear Performance Hoodie',
    image: 'public/images/hoodie.jpg',
    price: 59.99,
  },
  {
    id: 'product4',
    name: 'Fitgear Training Gloves',
    image: 'public/images/gloves.jpg',
    price: 29,
  },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Link
            key={`product-${product.id}`}
            href={`/products/${product.id}`}
            data-test-id={`product-${product.id}`}
            style={{
              display: 'block',
              marginBottom: '1rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <h2>{product.name}</h2>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '200px',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              />
              <p>Price: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
