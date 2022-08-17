import mongoose from 'mongoose'

const personalSchema = new mongoose.Schema({
  badges: {type: ["String"]},
  scores: {type: ["String"]},
  video: { type: String, required: true },
  degrees: {type: ["String"]},
  schoolQualification: {type: ["String"]},
  workExperience: {type: ["String"]},
  certificates: {type: ["String"]},
  portfolio: {type: ["String"]}
})

const Personal = mongoose.model(`Personal`, personalSchema)
export default Personal;