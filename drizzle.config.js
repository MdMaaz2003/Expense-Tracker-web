// drizzle.config.js
module.exports = {
  dialect: 'postgresql', // Use 'postgresql' for PostgreSQL, 'mysql' for MySQL
  host: 'ep-delicate-heart-a58xas8z.us-east-2.aws.neon.tech',
  port: 5432, // Default PostgreSQL port
  user: 'neondb_owner', // Replace with your database user
  password: 'io3Ws0vRNOCq',
  database: 'Expenses-Tracker',
  ssl: true,
  migrations: {
    tableName: 'drizzle_migrations',
    directory: './migrations',
  },
  schema: "./utils/schema.jsx", // Specify your schema file path here
  dbCredentials: {
    user: 'neondb_owner', // Replace with your database user
    password: 'io3Ws0vRNOCq',
    database: 'Expenses-Tracker',
    host: 'ep-delicate-heart-a58xas8z.us-east-2.aws.neon.tech',
    port: 5432, // Default PostgreSQL port
  },
};
