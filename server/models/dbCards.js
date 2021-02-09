import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  caption: String,
  url: String,
});

export default mongoose.model('cards',cardSchema);
