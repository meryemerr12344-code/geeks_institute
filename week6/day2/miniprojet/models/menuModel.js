const pool = require('../db');

class MenuModel {
    static async getAllItems() {
        const query = 'SELECT * FROM menu_items ORDER BY item_id';
        const result = await pool.query(query);
        return result.rows;
    }

    static async getItemByName(name) {
        const query = 'SELECT * FROM menu_items WHERE item_name = $1';
        const result = await pool.query(query, [name]);
        return result.rows[0];
    }

    static async getItemById(id) {
        const query = 'SELECT * FROM menu_items WHERE item_id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    static async createItem(name, price) {
        const query = 'INSERT INTO menu_items (item_name, item_price) VALUES ($1, $2) RETURNING *';
        const result = await pool.query(query, [name, price]);
        return result.rows[0];
    }

    static async updateItem(id, name, price) {
        const query = 'UPDATE menu_items SET item_name = $1, item_price = $2 WHERE item_id = $3 RETURNING *';
        const result = await pool.query(query, [name, price, id]);
        return result.rows[0];
    }

    static async deleteItem(id) {
        const query = 'DELETE FROM menu_items WHERE item_id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = MenuModel;