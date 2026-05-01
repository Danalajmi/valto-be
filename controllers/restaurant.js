const Restaurant = require("../models/Restaurant")

exports.create_restaurant = async (req, res) => {
  try {
    let { name, location, phone_number, email, opening_time, closing_time } =
      req.body
    let owner = res.locals.token.id
    let restaurantInfo = {
      name,
      location,
      phone_number,
      email,
      opening_time,
      closing_time,
      owner,
    }

    let restaurant = await Restaurant.create(restaurantInfo)
    res.send(restaurant)
  } catch (error) {
    throw error
  }
}

exports.getAllRest = async (req, res) => {
  try {
    let restaurants = await Restaurant.find()

    res.send(restaurants)
  } catch (error) {
    console.log(error)
    throw error
  }
}

exports.searchReastaurant = async (req, res) => {
  try {
    let restaurant = Restaurant.find({ name: req.params.name })
    res.send(restaurant)
  } catch (error) {
    throw error
  }
}

exports.getARestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findById(req.params.id )
    res.send(restaurant)
  } catch (error) {
    throw error
  }
}
