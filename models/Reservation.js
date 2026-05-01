const mongoose = require("mongoose")
const { type } = require("os")

const reservationSchema = new mongoose.Schema(
  {

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    status: {type: String, required: true, default: 'Reserved'},
    date: {type: String, required: true},
  },
  { timestamps: true }
)

const Reservation = mongoose.model("Reservation", reservationSchema)
module.exports = Reservation
