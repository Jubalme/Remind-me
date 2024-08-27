const mongoose = require("mongoose");
const loginSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
    },

    password: {
      type: String,
      specialchars: true,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      specialchars: true,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", loginSchema);
module.exports=user;