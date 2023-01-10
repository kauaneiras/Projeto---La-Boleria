import { connection } from "../database/database.js";

async function postClientRepository(name, address, phone){
    const result = await connection.query(`
        INSERT INTO clients (name, address, phone)
        VALUES ($1, $2, $3)
    `, [name, address, phone]);
    return result;
}

async function getClientById(clientId){
    const client = await connection.query(`
        SELECT * FROM clients
        WHERE id = $1
    `, [clientId]);
    return client.rows[0];
}

async function getOrdersByIdClient(clientId){
    const orders = await connection.query(`
        SELECT * FROM orders
        WHERE "clientId" = $1
    `, [clientId]);
    const ordersWithCakeName = await Promise.all(orders.rows.map(async (order) => {
        const cake = await connection.query(`
            SELECT * FROM cakes
            WHERE id = $1
        `, [order.cakeId]);
        return {
            orderId: order.id,
            quantity: order.quantity,
            createdAt: order.createdAt,
            totalPrice: order.totalPrice,
            cakeName: cake.rows[0].name
        }
    }
    ));
    return ordersWithCakeName;
}

export { postClientRepository, getClientById, getOrdersByIdClient };