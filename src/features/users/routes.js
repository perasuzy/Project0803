const express = require("express")
const router = express.Router()

const controller = require("./controller")
const validate = require("../../middlewares/validator")

const userSchema = {
    name: "string",
    email: "string"
}

router.post("/create", controller.createUser)
router.put("/update/:id", controller.updateUser)
router.delete("/remove/:id", controller.removeUser)
router.get("/", controller.getUsers)

module.exports = router