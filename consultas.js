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
    const result = await pool.query(`SELECT store_name FROM stores ORDER BY store_name`);
    return result.rows
}
async function getCategories() {
    const result = await pool.query(`SELECT category_name FROM categories ORDER BY category_name`);
    return result.rows
}
async function getBrands() {
    const result = await pool.query(`SELECT brand_name FROM brands ORDER BY brand_name`);
    return result.rows
}

module.exports = {getcustomers,getStores,getCategories,getBrands}