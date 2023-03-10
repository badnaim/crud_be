import express from "express";
import { getProduct } from "../services/product-service.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  console.log("get huselt orj irle");
  const { query } = req;
  const result = await getProduct(query.limit || 10);
  res.status(200).send(result);
});

export default router;
