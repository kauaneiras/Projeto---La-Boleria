import { postClientRepository, getOrdersByIdClient} from "../repositories/clients.repository.js";

async function postClientController(req, res){
    const { name, address, phone } = req.body;
    try{
        await postClientRepository(name, address, phone);
        return res.sendStatus(201);
    }
    catch(error){
        return res.sendStatus(500);
    }
}

async function getClientOrdersByClientIdController(req, res){
    const { id } = req.params;
    try {
        const client = await getOrdersByIdClient(id);
        if(!client){
            return res.status(404).send("Client not found");
        }
        return res.status(200).send(client);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { postClientController, getClientOrdersByClientIdController};