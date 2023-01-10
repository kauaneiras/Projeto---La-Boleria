import { Router } from "express";
import { postCake } from "../controllers/cakes.controller.js";
import { createCake } from "../middlewares/cakes.middleware.js";

const cakesRoutes = Router();

cakesRoutes.post("/cakes", createCake, postCake);

export default cakesRoutes;
