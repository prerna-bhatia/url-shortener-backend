//import mongoose for defining schema
const mongoose = require('mongoose');

//define schema for storing urls
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true }, // Long/original URL
  shortCode: { type: String, required: true, unique: true }, // Short code generated
  createdAt: { type: Date, default: Date.now }, // Timestamp of creation
  expiryDate: { type: Date }
});

//export model
module.exports = mongoose.model('Url', urlSchema);
