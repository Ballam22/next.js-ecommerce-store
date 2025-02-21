import { notFound } from 'next/navigation';
import { getProductById } from '../../database/products';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductPage({
  params,
}: {
  params: { productid: string };
}) {
  console.log('🔍 Raw params:', params);

  // Extract only numeric part of the productid (Fixes "product2" issue)
  const productid = parseInt((await params).productid.replace(/\D/g, ''), 10);

  // Validate params synchronously
  if (!productid) {
    console.error('❌ No product ID in params');
    return notFound();
  }
  if (isNaN(productid)) {
    console.error('❌ Invalid product ID:', productid);
    return notFound();
  }

  console.log('🔍 Fetching product with ID:', productid);

  // Fetch product asynchronously
  const product = await getProductById(productid);

  if (!product) {
    console.error('❌ Product not found:', productid);
    return notFound();
  }

  console.log('✅ Product found:', product);

  return (
    <ProductDetailsClient product={{ ...product, id: product.id.toString() }} />
  );
}
