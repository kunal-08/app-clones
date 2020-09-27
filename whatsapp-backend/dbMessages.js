import mongoose from 'mongoose'

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String
});

export default mongoose.model('messageContent', whatsappSchema)