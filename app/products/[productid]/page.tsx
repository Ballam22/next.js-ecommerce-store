import { notFound } from 'next/navigation';
import { getProducts } from '../../database/products';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductPage({
  params,
}: {
  params: { productid: string };
}) {
  // Ensure params.productid is converted correctly to a number
  const productid = Number(params.productid.replace(/\D/g, '')); // Removes any non-digit characters

  if (isNaN(productid)) {
    console.error('Invalid product ID:', params.productid);
    return notFound();
  }

  console.log('Product ID after cleanup:', productid);

  const products = await getProducts();
  const product = products.find((p) => p.id === productid);

  if (!product) {
    return notFound();
  }

  return (
    <ProductDetailsClient product={{ ...product, id: product.id.toString() }} />
  );
}
