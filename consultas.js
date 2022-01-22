const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "0102",
    database: "bikeshop",
    port: 5432,
});

async function getcustomers() {
    const result = await pool.query(`SELECT * FROM customers`);
    return result.rows
}
async function getStores() {
    const result = await pool.query(`SELECT store_name FROM stores`);
    return result.rows
}

module.exports = {getcustomers,getStores}