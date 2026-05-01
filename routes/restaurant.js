const router = require("express").Router()
const middleware = require("../middleware/auth")
const restaurantCTRL = require("../controllers/restaurant")
const itemCTRL = require("../controllers/item")

// Create rest Route
router.post(
  "/new",
  middleware.stripToken,
  middleware.verifyToken,
  restaurantCTRL.create_restaurant
)

router.get(
  "/all",
  restaurantCTRL.getAllRest
)

router.get(
  "/:id/items",
  itemCTRL.getResItems
)

router.get(
  "/:id",
  restaurantCTRL.getARestaurant
)


router.post(
  "/newItem",
  middleware.stripToken,
  middleware.verifyToken,
  itemCTRL.createItem
)
router.post(
  "/reserveItem",
  middleware.stripToken,
  middleware.verifyToken,
  itemCTRL.reserveItem
)




module.exports = router
