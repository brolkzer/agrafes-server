import path from "path";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import connect from "../database/connection";
import productsRoutes from "../routes/products.routes";
import cors from "cors"
const app = express();

// Server & Routes

app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, async () => {
    try {
      console.log(`App is running at port ${process.env.HEROKU_PORT || process.env.PORT}`)
    await connect();
    productsRoutes(app)
    } catch (err:any) {
      console.log(`App is not running due to error : ${err}` );
      
    }
})