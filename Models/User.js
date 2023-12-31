const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  countryCode: { type: String },
  emiratesId: { type: String },
  fileNumber: { type: String },
  gender: { type: String },
  city: { type: String },
  dob: { type: String },
  role: {
    type: String,
  },
  image: {
    type: Array,
  },
  emiratesIdFront: {
    type: Array,
  },
  emiratesIdBack: {
    type: Array,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  uniqueId1: { type: String }, //fil
  uniqueId2: { type: String }, //emi
  assignedDoctorId: { type: String },
  assignedDoctorName: { type: String },
  assignedDoctorImage: { type: Array },
  isHead: { type: String },
  lastScan: { type: Date },
  access_token: { type: String },
  device_token: { type: String },
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
