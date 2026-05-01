const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    address: { type: String, required: false },
    phoneNumber: { type: Number, required: true },
    role: { type: String, enum: ["Restaurant Owner", "Buyer", "Admin"], required: true },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User
