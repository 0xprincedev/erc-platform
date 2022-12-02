import express from 'express'
import {getRecord} from "../controllers/customerController.js"
const router = express.Router();

router.get("/get", getRecord);

export default router;
