import { createOrder } from "../repositories/order.repository.js";

async function createOrderController(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;
  try {
    await createOrder(clientId, cakeId, quantity, totalPrice);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export { createOrderController };