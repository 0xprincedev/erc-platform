import db from '../models/index.js';
import customers from '../data/customers.js';
const Customer = db.customers;

const importData = async () => {
	try {
		for (let customer of customers) {
			if (customer.firstName.toLowerCase() === 'test' || customer.lastName.toLowerCase() === 'test') {
				continue;
			}
			const _customer = new Customer(customer);
			console.log(_customer);
			await _customer.save();
		}
	} catch (err) {
		console.log(err);
	}
};

export { importData };
