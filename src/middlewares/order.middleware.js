import { OrderSchema } from "../schemas/order.schema.js";
import { getClientById } from "../repositories/clients.repository.js";
import { getCakeById } from "../repositories/cakes.repository.js";
import { getOrdersByDate, getOrders } from "../repositories/order.repository.js";

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
    return res.sendStatus(500);
  }
}

async function checkOrders(req, res, next){
  const { date } = req.query; // formato da query: YYYY-MM-DD
  try{
    if (date){
      const orders = await getOrdersByDate(date);
      if (orders.length === 0) {return res.status(404).send(orders);}
    } 
    if (!date){
      const orders = await getOrders();
      if (orders.length === 0) {return res.status(404).send(orders);}
    }
    next();
  }
  catch (err) {
    return res.sendStatus(500);
  }
}

export { validateOrder, checkOrders };