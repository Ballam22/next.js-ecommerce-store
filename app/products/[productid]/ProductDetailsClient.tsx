'use client';

type ProductProps = {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  };
};

export default function ProductDetailsClient({ product }: ProductProps) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: '300px', display: 'block', marginBottom: '1rem' }}
      />
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Price: ${product.price}
      </div>
      {/* You can add more interactive UI elements here (e.g., Add to Cart button) */}
    </div>
  );
}
