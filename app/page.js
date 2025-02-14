import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to FitGear</h1>
        <p className={styles.description}>
          Your one-stop shop for premium fitness gear. Discover high-quality
          equipment and apparel to elevate your workout.
        </p>
        <div className={styles.featured}>
          <Image
            src="/images/athletes.jpg"
            alt="Featured FitGear Product"
            width={600}
            height={400}
            priority
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
