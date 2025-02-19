import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: "url('/images/athletes.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to FitGear</h1>
        <p className={styles.description}>
          Your one-stop shop for premium fitness gear. Discover high-quality
          equipment and apparel to elevate your workout.
        </p>
        <div className={styles.featured}>
          <Image
            src="/images/products.jpg"
            alt="Featured FitGear Product"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.cta}>
          <Link href="/products" className={styles.shopNow}>
            Shop Now
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} FitGear. All rights reserved.</p>
      </footer>
    </div>
  );
}
// The Home component is a simple page that displays a welcome message, a description of the site, a featured product image, and a call-to-action button to shop for products. The page also includes a footer with the copyright information.
