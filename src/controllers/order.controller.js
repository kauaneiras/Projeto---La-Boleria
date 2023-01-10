import { createOrder, getOrdersByDate, getOrders, getOrderById} from "../repositories/order.repository.js";

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
  const { id } = req.params;

  if (date && !id) {
    const orders = await getOrdersByDate(date);
    return res.status(200).send(orders);
  }
  if (!date && id) {
    const order = await getOrderById(id);
    return res.status(200).send(order);
  }
  const orders = await getOrders();
  return res.status(200).send(orders);
}


export { createOrderController, getOrdersController };