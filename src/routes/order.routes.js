import { Router } from "express";
import { validateOrder } from "../middlewares/order.middleware.js";
import { createOrderController } from "../controllers/order.controller.js";

const orderRoutes = Router();

orderRoutes.post("/order", validateOrder, createOrderController);

export default orderRoutes;