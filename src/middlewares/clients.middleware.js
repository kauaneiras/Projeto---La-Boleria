import { clientsSchema } from "../schemas/clients.schema.js";
import { getClientById } from "../repositories/clients.repository.js";

async function postClientMiddleware(req, res, next){
    try {
        await clientsSchema.validateAsync(req.body);
        next();
    } catch (error) {
        res.sendStatus(400);
    }
}

async function getClientOrdersByClientIdMiddleware(req ,res, next){
    const { id } = req.params;
    try {
        const client = await getClientById(id);
        if(!client){
            return res.status(404).send("Client not found");
        }
        next();
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { postClientMiddleware, getClientOrdersByClientIdMiddleware };