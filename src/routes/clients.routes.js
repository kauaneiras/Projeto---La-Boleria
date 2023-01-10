import { Router } from "express";
import { postClientMiddleware } from "../middlewares/clients.middlewares.js";
import { postClientController } from "../controllers/clients.controller.js";

const clientsRoutes = Router();

clientsRoutes.post("/clients", postClientMiddleware, postClientController);

export default clientsRoutes;