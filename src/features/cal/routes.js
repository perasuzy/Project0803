const express = require("express")
const router = express.Router()

const controller = require("./controller")
const validate = require("../../middlewares/validator")


router.post("/", controller.plus)

module.exports = router