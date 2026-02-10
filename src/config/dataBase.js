const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sumanthabbu1398_db_user:T9kY4GUw5PVFXmsm@namastenode.vpqbv0l.mongodb.net/dtnr",
  );
};

module.exports = { connectDB };
