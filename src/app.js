const express = require("express")

const userRoutes = require("./features/users/routes")
const calRoutes = require("./features/cal/routes")

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/cal", calRoutes)

module.exports = app