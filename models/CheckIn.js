const mongoose = require("mongoose")

const checkInSchema = mongoose.Schema ({
    soberTracker: {
        type: Number,
        //required: [true],
        allowNull: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, 
{
    timestamps: true,
}
)

module.exports = mongoose.model("CheckIn", checkInSchema)