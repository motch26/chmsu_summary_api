const mysql = require("mysql2/promise");
const { createConnection } = require("./dbUtils");
module.exports.login = async (userInfo) => {
  const { username, password } = userInfo;
  const conn = await createConnection();
  const [rows] = await conn.execute(
    "SELECT * FROM user WHERE Username = ? AND Password = ?",
    [username, password]
  );
  conn.release();
  if (rows.length) return { status: 200, data: rows[0] };
  else return { status: 404, data: null };
};
