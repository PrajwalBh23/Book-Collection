import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    available:{
        type: Boolean,
    },
    image:{
        type: String,
    }
});

export default mongoose.model("Book",bookSchema);