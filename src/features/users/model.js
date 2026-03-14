const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        createDate: {
            type: Date,
            default: Date.now
        },
        lastUpdateDate: {
            type: Date,
            default: Date.now
        },
        
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model("User", UserSchema)