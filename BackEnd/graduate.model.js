import mongoose from 'mongoose'

const graduatesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  profile: { type: Number, required: true },
  training: { type: Number, required: true },
  personal: {type: Number, required: true }
})

const Graduates = mongoose.model(`Graduates`, graduatesSchema);
export default Graduates;
