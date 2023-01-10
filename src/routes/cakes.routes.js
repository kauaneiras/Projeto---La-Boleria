import { Router } from "express";
import { postCake } from "../controllers/cakes.controller";
import { createCake } from "../middlewares/cakes.middleware";

const cakesRoutes = Router();

cakesRoutes.post("/cakes", createCake, postCake);

export default cakesRoutes;
