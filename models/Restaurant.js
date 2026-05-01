const mongoose = require("mongoose")
const { type } = require("os")

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    opening_time: { type: String, required: true },
    closing_time: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

const Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports = Restaurant
