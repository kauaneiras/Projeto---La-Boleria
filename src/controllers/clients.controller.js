import { postClientRepository } from "../repositories/clients.repository.js";

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

export { postClientController };