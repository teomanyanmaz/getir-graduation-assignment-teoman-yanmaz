const mongoose = require("mongoose");

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to Mongodb");
});

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
