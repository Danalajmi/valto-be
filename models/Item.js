const mongoose = require("mongoose")
const { type } = require("os")

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: {type: String, required: true},
    price: {type: Number, required: true},
    expiry_time: {type: Date, required: true},
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

const Item = mongoose.model("Item", itemSchema)
module.exports = Item
