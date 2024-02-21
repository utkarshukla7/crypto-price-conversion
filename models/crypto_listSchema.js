import mongoose from "mongoose";

const crypto_listSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: false },
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    symbol: {
        type:String,
        required:true,
    },
})

export default mongoose.model('crypto_list',crypto_listSchema);