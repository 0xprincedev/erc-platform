import express from 'express';
const router = new express.Router();
import Customer from './customer.route.js';

router.use('/customer', Customer);

export default router;
