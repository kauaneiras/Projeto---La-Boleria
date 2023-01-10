//import modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dayjs from "dayjs";

//import routes
import cakesRoutes from "./routes/cakes.routes.js";
import clientsRoutes from "./routes/clients.routes.js";

//APP
const app = express();
app.use(express.json());
app.use(cors());

app.use(cakesRoutes);
app.use(clientsRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `${dayjs().format("YYYY-MM-DD HH:mm:ss")} [Listening ON] Port: ${PORT}`
  );
});