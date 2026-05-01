const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

// Hash a password and return hashed value
const hashPassword = async (pass) => {
  let hashedPassword = await bcrypt.hash(pass, SALT_ROUNDS)
  return hashedPassword
}

// Compare password entered and password stored in the database
const comparePassword = async (pass, storedPassword) => {
  let isMatch = await bcrypt.compare(pass, storedPassword)
  return isMatch
}

// Creates a JSON web token to verify users with using a payload
const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET)
  return token
}

//
const stripToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1]
    if (token) {
      res.locals.token = token
      return next()
    }
    res.send(201).send({ status: 201, message: "Unauthorized Access" })
  } catch (error) {
    console.log(error)
    res.send(401).send({ status: 401, message: "strip token ERR" })
  }
}

//
const verifyToken = (req, res, next) => {
  let { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      res.locals.token = payload

      return next()
    }
    res.send(201).send({ status: 201, message: "Unauthorized Access" })
  } catch (err) {
    res.send(401).send({ status: 401, message: "Verify token ERR" })
  }
}

const verifyAdmin = (req,res,next) => {
  let { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)

    if (payload.role === 'Admin') {
      res.locals.token = payload
      return next()
    }
    res.send(201).send({ status: 201, message: "Unauthorized Access" })
  } catch (err) {
    res.send(401).send({ status: 401, message: "Verify Admin ERR" })
  }
}

const checkSession = async (req,res) => {
  const payload = res.locals.token
  res.status(200).send(payload)
  }



module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  stripToken,
  verifyToken,
  verifyAdmin,
  checkSession
}
