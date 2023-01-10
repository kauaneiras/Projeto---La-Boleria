import { clientsSchema } from "../schemas/clients.schema.js";

async function postClientMiddleware(req, res, next){
    try {
        await clientsSchema.validateAsync(req.body);
        next();
    } catch (error) {
        res.sendStatus(400);
    }
}

export { postClientMiddleware };