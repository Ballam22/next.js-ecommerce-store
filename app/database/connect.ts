import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

dotenvSafe.config();

const sql = postgres(process.env.DATABASE_URL!);
export default sql;
