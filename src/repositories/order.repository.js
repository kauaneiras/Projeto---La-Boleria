import { connection } from "../database/database.js";
import dayjs from "dayjs";

async function createOrder(clientId, cakeId, quantity, totalPrice){
    //colocar clientId, cakeId, quantity, createdAt, totalPrice
    const result = await connection.query(`
        INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt", "totalPrice")
        VALUES ($1, $2, $3, $4, $5);
    `, [clientId, cakeId, quantity, dayjs().format("YYYY-MM-DD HH:mm:ss"), totalPrice]);
}


export { createOrder };