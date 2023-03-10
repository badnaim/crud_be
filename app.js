import express from "express";
import prod_router from "./routes/product.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(prod_router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
