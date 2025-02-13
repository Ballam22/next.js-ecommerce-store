import { notFound } from 'next/navigation';
// app/products/[productid]/Page.tsx
import { getProducts } from '../../database/products';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductPage({
  params,
}: {
  params: { productid: string };
}) {
  let product;
  try {
    const products = await getProducts();
    product = products.find((p) => p.id === Number(params.productid));
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound(); // or handle the error as appropriate
  }

  if (!product) {
    notFound();
  }

  // Convert the product data as needed
  const productProps = {
    id: product.id.toString(),
    name: product.name,
    image: product.imageUrl, // adjust if needed
    price: product.price,
  };

  return <ProductDetailsClient product={productProps} />;
}
