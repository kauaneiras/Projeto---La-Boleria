import { createOrder, getOrdersByDate, getOrders } from "../repositories/order.repository.js";

async function createOrderController(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;
  try {
    await createOrder(clientId, cakeId, quantity, totalPrice);
    return res.sendStatus(201);
  } catch (err) {
    return res.sendStatus(500);
  }
}

async function getOrdersController(req, res) {
  const { date } = req.query;
  if (date) {
    const orders = await getOrdersByDate(date);
    return res.status(200).send(orders);
  }
  const orders = await getOrders();
  return res.status(200).send(orders);
}

export { createOrderController, getOrdersController };