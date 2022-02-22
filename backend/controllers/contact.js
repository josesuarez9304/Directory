import board from "../models/contact.js";

const addContact = async (req, res) => {
  if (!req.body.name )
    return res.status(400).send({ message: "Incomplete data" });



  const existingContact = await user.findOne({ email: req.body.email });
  if (existingContact)
    return res.status(400).send({ message: "The Contact is already registered" });

  
    const contactRegister = new mongoose.Schema({
  
        name: req.body.name,
        phone: req.body.phone,
        cellPhone: req.body.cellPhone,
        
      });

}