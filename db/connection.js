const mongoose = require("mongoose");

async function ConnectingMongo() {
  await mongoose.connect(process.env.MONGO_URL);
}
// main().catch((err) => console.log(err));

module.exports = {
  ConnectingMongo,
};
