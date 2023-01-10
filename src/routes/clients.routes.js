import { Router } from "express";
import { postClientMiddleware, getClientOrdersByClientIdMiddleware } from "../middlewares/clients.middleware.js";
import { postClientController, getClientOrdersByClientIdController } from "../controllers/clients.controller.js";

const clientsRoutes = Router();

clientsRoutes.post("/clients", postClientMiddleware, postClientController);
clientsRoutes.get("/clients/:id/orders", getClientOrdersByClientIdMiddleware, getClientOrdersByClientIdController)

export default clientsRoutes;