const router = require("express").Router()
const controller = require("../controllers/auth")
const middleware = require("../middleware/auth")

router.post("/register", controller.register)
router.post("/login", controller.login)
router.put(
  "/updatePass/:id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePassword
)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.checkSession
)

module.exports = router
