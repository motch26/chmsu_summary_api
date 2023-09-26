const { createConnection } = require("./dbUtils")

module.exports.getValidEmployees =  async (type) => {
    const conn = await createConnection();
    const [rows] = await conn.query()
    const aaa = await
}

module.exports.getType = async (id) => {
  const conn = await createConnection();
  const [rows] = await conn.query("SELECT * FROM designation WHERE id = ?", [id]);
  if(rows.length) return {status: 200, data: rows}
  else return {status: 400, data: []}
};