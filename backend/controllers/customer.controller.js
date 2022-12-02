import db from '../models/index.js';
const Customer = db.customers;

const register = async (req, res) => {
	const customer = req.body;
	try {
		await Customer.create(customer);
		res.status(200).send('success');
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const getRecord = async (req, res) => {
	const { startDate, endDate } = req.body.dateRange;
	try {
		const result = await Customer.find({ createdAt: { $gt: startDate, $lt: endDate } });
		res.status(200).json(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

export { register, getRecord };
