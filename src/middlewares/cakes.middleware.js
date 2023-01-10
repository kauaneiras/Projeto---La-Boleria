import { connection } from "../database/database";
import cakeSchema from "../schemas/cackes.schema";

async function createCake(req, res, next) {
    const { name, price, image, description} = req.body;
    const { error } = cakeSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const nameExists = await connection.query(`
        SELECT * FROM cakes WHERE name = $1
        `, [name]
        );

        if (nameExists.rowCount) {
            return res.status(409).send("This cake already exists!");
        }
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
    
    next();
}

export { createCake };

