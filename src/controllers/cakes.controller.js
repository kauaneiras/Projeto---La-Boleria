import { createCakeRepository } from "../repositories/cakes.repository.js";

async function postCake(req, res){
    const {name, price, image, description} = req.body;
    try {
        await createCakeRepository({name, price, image, description});
        return res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
    }
}

export { postCake };