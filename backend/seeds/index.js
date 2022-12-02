import db from '../models/index.js';
import mongoose from 'mongoose';

mongoose.connect(db.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

import { importData } from './customer.seed.js';

importData();
