const Item = require("../models/Item")
const Restaurant = require("../models/Restaurant")
const Reservation = require("../models/Reservation")
exports.createItem = async (req, res) => {
  try {
    let { name, description, price, expiry_time } = req.body
    let restaurant_id = await Restaurant.findOne({owner: res.locals.token.id})
    let ItemInfo = { name, description, price, expiry_time, restaurant_id: restaurant_id.id }
    let item = await Item.create(ItemInfo)
    res.send(item)
  } catch (error) {
    console.log(error)
    throw error
  }
}

exports.getResItems = async(req,res) => {
  try {
    let items = await Item.find({restaurant_id : req.params.id})
    res.send(items)
  } catch (error) {
    console.log(error)
    throw error
  }
}

exports.reserveItem = async(req,res) => {
  try {
    let user = res.locals.token.id
    const d = new Date();
    let date = d.toISOString().split('T')[0];
    let {item_id} = req.body


    let reserve = await Reservation.create({user,item: item_id, date})
    res.send(reserve)
  } catch (error) {

  }
}
