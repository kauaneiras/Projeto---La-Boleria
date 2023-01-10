import { connection } from "../database/database.js";
import dayjs from "dayjs";

async function createOrder(clientId, cakeId, quantity, totalPrice){
    await connection.query(`
        INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt", "totalPrice")
        VALUES ($1, $2, $3, $4, $5);
    `, [clientId, cakeId, quantity, dayjs().format("YYYY-MM-DD HH:mm:ss"), totalPrice]);
}

async function getOrders(){
    const orderresult = await connection.query(`
        SELECT * FROM orders;
    `);
    const orders = orderresult.rows;
    const clientresult = await connection.query(`
        SELECT * FROM clients;
    `);
    const clients = clientresult.rows;
    const cakeresult = await connection.query(`
        SELECT * FROM cakes;
    `);
    const cakes = cakeresult.rows;
    const ordersWithClientAndCake = orders.map(order => {
        const client = clients.find(client => client.id === order.clientId);
        const cake = cakes.find(cake => cake.id === order.cakeId);
        return {
            client,
            cake,
            orderId: order.id,
            createdAt: order.createdAt,
            quantity: order.quantity,
            totalPrice: order.totalPrice
        }
    }
    );
    return ordersWithClientAndCake;
}

async function getOrdersByDate(date){ // formato da query: YYYY-MM-DD
    const orderresult = await connection.query(`
        SELECT * FROM orders WHERE "createdAt"::date = $1;
    `, [date]);
    const orders = orderresult.rows;
    const clientresult = await connection.query(`
        SELECT * FROM clients;

    `);
    const clients = clientresult.rows;
    const cakeresult = await connection.query(`
        SELECT * FROM cakes;
    `);
    const cakes = cakeresult.rows;

    const ordersWithClientAndCake = orders.map(order => {
        const client = clients.find(client => client.id === order.clientId);
        const cake = cakes.find(cake => cake.id === order.cakeId);
        return {
            client,
            cake,
            orderId: order.id,
            createdAt: order.createdAt,
            quantity: order.quantity,
            totalPrice: order.totalPrice
        }
    }
    );
    return ordersWithClientAndCake;
}

async function getOrderById(id){
    const orderresult = await connection.query(`
        SELECT * FROM orders WHERE id = $1;
    `, [id]);
    const order = orderresult.rows[0];
    const clientresult = await connection.query(`
        SELECT * FROM clients WHERE id = $1;
    `, [order.clientId]);
    const client = clientresult.rows[0];
    const cakeresult = await connection.query(`
        SELECT * FROM cakes WHERE id = $1;
    `, [order.cakeId]);
    const cake = cakeresult.rows[0];
    const orderWithClientAndCake = {
        client,
        cake,
        orderId: order.id,
        createdAt: order.createdAt,
        quantity: order.quantity,
        totalPrice: order.totalPrice
    }
    return orderWithClientAndCake;
}

export { createOrder, getOrdersByDate, getOrders, getOrderById };