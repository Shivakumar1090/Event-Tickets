const mongoose = require("mongoose");
require("dotenv").config();

const MONGOURI = process.env.MONGO_URL;

const ConnectDB = () => {
    mongoose.set('strictQuery', true);

    mongoose.connect(MONGOURI);

    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", async () => {
        console.log("Connected to mongo ");
    });

    mongoose.connection.on("error", async (err) => {
        console.log("error connecting", err);
    });
}

module.exports = ConnectDB;