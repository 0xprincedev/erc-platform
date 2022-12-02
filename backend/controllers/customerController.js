import path from "path";
import { Low, JSONFile } from "lowdb";
import asyncHandler from "express-async-handler";

const __dirname = path.resolve();

const file = path.join(__dirname, "/backend/data/db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

const registerCustomer = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    legalBusinessName,
    numberOfW2,
    industry,
  } = req.body;

  await db.read();

  db.data = db.data || { customers: [] };

  const { customers } = db.data;

  for (let i = 0; i < customers.length; i++) {
    let okay = true;

    for (let key of Object.keys(customers[i])) {
      if (customers[i][key] != req.body[key]) {
        okay = false;
      }
    }

    if (okay == true) {
      res.status(201).json({ result: 0 });
      return;
    }
  }

  customers.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    legalBusinessName: legalBusinessName,
    numberOfW2: numberOfW2,
    industry: industry,
  });

  await db.write();

  res.status(201).json({ result: 1 });
});

const getRecord = asyncHandler(async (req, res) => {
  await db.read();

  db.data ||= { customers: [] };

  const { customers } = db.data;

  res.json(customers);
});

export { registerCustomer, getRecord };
