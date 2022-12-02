import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import Customer from './customer.model.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URI;
db.customers = Customer(mongoose);

export default db;
