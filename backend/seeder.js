import mongoose from "mongoose";
import dotenv from "dotenv";
import customers from "./data/customers.js";
import Customer from "./models/customerModel.js";
import connectDB from "./config/db.js";

dotenv.config();

// connectDB();

const importData = async () => {
  try {
    console.log('import started')
    await Customer.deleteMany();

    for (let customer of customers) {
        const _customer = new Customer(customer)
        await _customer.save()
    }

    // await Customer.insertMany(customers);
    console.log("Data imported!".green);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Customer.deleteMany();

    console.log("Data destroyed!".red);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
