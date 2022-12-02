import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     console.log('MONGO_URI: ', process.env.MONGO_URI);
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     //   useCreateIndex: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.Promise = global.Promise;

    mongoose.connection.on("err", (err) => {
      console.log("\x1b[31m%s\x1b[0m", "❌ | MONGO DB ERROR\n\n" + err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("\x1b[31m%s\x1b[0m", "❌ | DISCONNECTED FROM THE DATABASE");
    });

    mongoose.connection.on("connected", () => {
      console.log(
        "\x1b[32m%s\x1b[0m",
        "✅ | Successfully CONNECTED TO THE DATABASE"
      );
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
