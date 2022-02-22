import express, { application } from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
//import order from "./routes/order.js";



dotenv.config();

//significa aplicacion backend por express
// lo q esta en app ejecuta todo lo q esta en servidor express
const app = express();
//que nuestro servidor de express solo va a usar json  envio y recibos son son
app.use(express.json());
//reglas de conexion si angular react y vue se puedan conectar con el backedn express decide si lo deja entrar
//herramientas oficiales las deja entrar
app.use(cors());


app.listen(process.env.PORT, () =>
  console.log("Backend server running on port:" + process.env.PORT)
);

db.dbConnection();
