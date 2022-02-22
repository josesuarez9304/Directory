import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  
  name: String,
  phone: String,
  cellPhone: String,
  registerDate: { type: Date, default: Date.now },
});

const contact = mongoose.model("contacts", contactSchema);
export default contact;