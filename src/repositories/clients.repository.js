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

export { postClientRepository, getClientById };