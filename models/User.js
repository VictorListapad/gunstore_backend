const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const UserSchema = Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  role: {
    type: String,
    require: true,
    enum: ["USER", "MODERATOR", "ADMIN"],
    default: "USER",
  },
});

module.exports = model("User", UserSchema);
