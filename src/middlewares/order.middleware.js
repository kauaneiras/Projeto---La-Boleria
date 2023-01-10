import { OrderSchema } from "../schemas/order.schema.js";
import { getClientById } from "../repositories/clients.repository.js";
import { getCakeById } from "../repositories/cakes.repository.js";

async function validateOrder(req, res, next) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;

  try {
    await OrderSchema.validateAsync(req.body);
    const clientExists = await getClientById(clientId);
    const cakeExists = await getCakeById(cakeId);
    if (!clientExists) {return res.sendStatus(404);}
    if (!cakeExists) {return res.sendStatus(404);}
    next();
  } catch (err) {
    res.sendStatus(400);
  }
}

export { validateOrder };