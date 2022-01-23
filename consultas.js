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

async function searchData(store,category,brand) {
    const result = await pool.query(`SELECT stores.store_name, products.product_id, products.product_name, stocks.quantity, categories.category_name, brands.brand_name from products INNER JOIN stocks ON stocks.product_id=products.product_id INNER JOIN stores ON stores.store_id=stocks.store_id INNER JOIN categories ON categories.category_id=products.category_id INNER JOIN brands ON brands.brand_id=products.brand_id WHERE store_name='${store}' AND category_name='${category}' AND brand_name='${brand}';`)
    return result.rows
}
module.exports = {getcustomers,getStores,getCategories,getBrands,searchData}