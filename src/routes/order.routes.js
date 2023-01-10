import { Router } from "express";
import { validateOrder, checkOrders } from "../middlewares/order.middleware.js";
import { createOrderController, getOrdersController } from "../controllers/order.controller.js";

const orderRoutes = Router();

orderRoutes.post("/order", validateOrder, createOrderController);
orderRoutes.get("/orders", checkOrders, getOrdersController );

export default orderRoutes;