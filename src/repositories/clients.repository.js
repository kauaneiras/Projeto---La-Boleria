import { connection } from "../database/database.js";

async function postClientRepository(name, address, phone){
    const result = await connection.query(`
        INSERT INTO clients (name, address, phone)
        VALUES ($1, $2, $3)
    `, [name, address, phone]);
    return result;
}

export { postClientRepository };