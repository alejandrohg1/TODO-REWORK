import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  active:{
    type: Boolean,
    required: true
  }
},{timestamps: true})


const ToDo = mongoose.model('ToDo',todoSchema);

export default ToDo;