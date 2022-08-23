const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const scoreSchema = new mongoose.Schema({
    score: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
const informationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  badges:{
    type: [badgeSchema],
    default: [],
    required: true
  },
  scores:{
    type: [scoreSchema],
    default: [],
    required: true
  },
  videoPath: {
    type: String,
    required: false,
  }
});


const Information = mongoose.model(`Information`, informationSchema);

module.exports = Information;
