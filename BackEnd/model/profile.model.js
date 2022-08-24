const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  digitalFuturesEmail: {type: String, required: true },
  github: { type: String, required: true },
  Linkdin: {type: String, required: true },
  phone: { type: Number, required: true },
  gender: { type: String, required: true },
  nationatily: { type: String, required: true },
  personalityType: { type: String, required: true },
  selfie: {type: ["imgpath"]}

})

const Profile = mongoose.model(`Profile`, profileSchema)
module.exports = Profile;