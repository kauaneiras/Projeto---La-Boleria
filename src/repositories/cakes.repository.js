import { connection } from "../database/database.js";


async function nameExistsRepository(name) {
    return await connection.query(`
        SELECT * FROM cakes WHERE name = $1
        `, [name]
        );
}

async function createCakeRepository({name, price, image, description}) {
    return await connection.query(`
        INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)
        `, [name, price, image, description]
        );
}

async function getCakeById(cakeId){
    const cake = await connection.query(`
        SELECT * FROM cakes
        WHERE id = $1
    `, [cakeId]);
    return cake.rows[0];
}

export { nameExistsRepository, createCakeRepository, getCakeById };