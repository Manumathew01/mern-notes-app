const mongoose = require("mongoose");

connectDB().catch((err) => console.log(err));

async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline);
}

module.exports = connectDB
