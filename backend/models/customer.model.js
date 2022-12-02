const Customer = (mongoose) => {
	const customerSchema = mongoose.Schema(
		{
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
			},
			phoneNumber: {
				type: String,
				required: true,
			},
			legalBusinessName: {
				type: String,
				required: true,
			},
			numberOfW2: {
				type: String,
				required: true,
			},
			industry: {
				type: String,
				required: false,
			},
		},
		{ timestamps: true }
	);
	return mongoose.model('customer', customerSchema);
};

export default Customer;
