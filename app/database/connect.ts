// app/Database/Connect.ts
import postgres from 'postgres';

// Validate environment variables
if (
  !process.env.PGHOST ||
  !process.env.PGDATABASE ||
  !process.env.PGUSER ||
  !process.env.PGPASSWORD
) {
  throw new Error('Missing PostgreSQL environment variables');
}

const sql = postgres({
  host: process.env.PGHOST,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});

// Test the connection with proper type annotation
(async () => {
  try {
    const result = await sql<{ value: number }[]>`
      SELECT
        1 AS value
    `;
    console.log('Connected to PostgreSQL database:', result);
  } catch (error) {
    console.error('Failed to connect to PostgreSQL database:', error);
    process.exit(1);
  }
})().catch((err) => {
  console.error('Unhandled error in connection test:', err);
  process.exit(1);
});

export { sql };
