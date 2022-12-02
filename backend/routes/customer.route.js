import express from 'express';
const router = new express.Router();
import { register, getRecord } from '../controllers/customer.controller.js';

router.post('/', register);
router.post('/search', getRecord);

export default router;
