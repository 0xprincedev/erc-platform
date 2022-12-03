import db from '../models/index.js';
const Customer = db.customers;

const register = async (req, res) => {
	const customer = req.body;
	const { firstName, lastName, email, phoneNumber, legalBusinessName, numberOfW2, industry } = customer;
	const result = await Customer.find({
		firstName,
		lastName,
		email,
		phoneNumber,
		legalBusinessName,
		numberOfW2,
		industry,
	});
	if (result.length >= 1) {
		res.status(201).send({ result: 0 });
		return;
	}
	try {
		await Customer.create(customer);
		res.status(201).send({ result: 1 });
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
