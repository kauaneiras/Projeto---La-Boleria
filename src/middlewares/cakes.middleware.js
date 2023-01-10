import { nameExistsRepository } from "../repositories/cakes.repository.js";
import cakeSchema from "../schemas/cackes.schema.js";

async function createCake(req, res, next) {
    const { name, price, image, description} = req.body;
    const { error } = cakeSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const nameExists = await nameExistsRepository(name);
        if (nameExists.rowCount) {
            return res.status(409).send("This cake already exists!");
        }
        next();
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getCakeById(cakeId){
    const cake = await connection.query(`
        SELECT * FROM cakes
        WHERE id = $1
    `, [cakeId]);

    return cake.rows[0];
}

export { createCake, getCakeById};

