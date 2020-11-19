require('dotenv').config();
const { throws } = require('assert');
const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`

module.exports = async () => {
  console.log(url);
  try {
    const connection = await mongoose.connect(url, options);
    console.log(`Successfully connected to the DB!`)
    return connection.connection.db;
  } catch (error) {
    throw error;
  }
};
