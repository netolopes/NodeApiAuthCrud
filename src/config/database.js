require('dotenv').config()

module.exports = {

  /* SQLite */
  // dialect: 'sqlite',
  // storage: './db.sqlite',

  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Fortaleza',
  },
  timezone: 'America/Fortaleza',

  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
}
