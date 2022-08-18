const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  cohort: { type: String, required: true },
  track: { type: String, required: true },
  trainer: { type: String, required: true },
  finishDate: { type: String, required: true } 
})

const Training = mongoose.model(`Training`, trainingSchema)

module.exports = Training;