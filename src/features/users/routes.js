const express = require("express")
const router = express.Router()

const controller = require("./controller")
const validate = require("../../middlewares/validator")

const userSchema = {
    name: "string",
    email: "string"
}

router.post("/", controller.createUser)

router.get("/", controller.getUsers)

module.exports = router