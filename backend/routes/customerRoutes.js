import express from "express";
const router = express.Router();
import { registerCustomer } from "../controllers/customerController.js";

router.post("/register", registerCustomer);

export default router;
