import 'server-only';
import { config } from 'dotenv-safe';
import postgres, { type Sql } from 'postgres';

// Load environment variables
//config();

// Declare a global variable to store the PostgreSQL client
declare global {
  // eslint-disable-next-line no-var
  var postgresSqlClient: Sql | undefined;
}

// Function to connect to the database (creates a singleton client)
function connectOneTimeToDatabase(): Sql {
  // Check if a client already exists in the global scope
  if (!globalThis.postgresSqlClient) {
    try {
      // Create a new PostgreSQL client
      globalThis.postgresSqlClient = postgres({
        transform: {
          ...postgres.camel, // Convert column names to camelCase
          undefined: null, // Convert undefined values to NULL in the database
        },
      });
    } catch (error) {
      // Log and rethrow the error if connection fails
      console.error('Failed to connect to the database:', error);
      throw error;
    }
  }

  // Return the existing or newly created client
  return globalThis.postgresSqlClient;
}

// Export the PostgreSQL client
export const sql = connectOneTimeToDatabase();
