const mysql = require("mysql2/promise");
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
module.exports.createConnection = async () => {
  try {
    const pool = await mysql.createPool({
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    });
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    throw new Error(error.mesage);
  }
};
