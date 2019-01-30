// DB stuff:
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//client Schema:
const clientSchema = new Schema({
    _id: String,
    name: String,
    email: String,
    firstContact: Date,
    emailType : String,
    sold : Boolean,
    owner : String,
    country: String
})

//client model:
const Client = mongoose.model("Client", clientSchema);

// Make this accessible.
module.exports = Client