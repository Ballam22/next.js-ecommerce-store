import { notFound } from 'next/navigation';
import { getProducts } from '../../database/products';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductPage({
  params,
}: {
  params: { productid: string };
}) {
  // Ensure that the params are resolved by wrapping in Promise.resolve
  const { productid } = await Promise.resolve(params);

  let product;
  try {
    const products = await getProducts();
    // Convert productid (a string) to a number, since our IDs are numeric
    product = products.find((p) => p.id === Number(productid));
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }

  if (!product) {
    notFound();
  }

  // Prepare product data to send to the client component
  const productProps = {
    id: product.id.toString(),
    name: product.name,
    image: product.imageUrl, // Ensure this matches your schema
    price: product.price,
  };

  return <ProductDetailsClient product={productProps} />;
}
