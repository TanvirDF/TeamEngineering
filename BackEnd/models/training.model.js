const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PASSED", "FAILED", "PENDING"],
        required: false
    }
})

const trainingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    cohort: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true
    },
    finishDate: {
        type: Date,
        required: true
    },
    modules: {
        type: [moduleSchema],
        default: [],
        required: false
    }
})


const Training = mongoose.model(`Training`, trainingSchema)

module.exports = Training;