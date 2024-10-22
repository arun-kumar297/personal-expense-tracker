import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import transactionRoute from "./routes/transactionRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();

//middleware it allows json data as req
app.use(express.json());

//Routes
app.use("/transactions", transactionRoute);
app.use("/category", categoryRoutes);

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  connectDB(); // mongoDB connection
  console.log("server runnning....at http://localhost:" + PORT);
});
