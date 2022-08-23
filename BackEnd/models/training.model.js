const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    cohort: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    finishDate: {
        type: Date,
        required: true
    }
})

const Training = mongoose.model(`Training`, trainingSchema)

module.exports = Training;