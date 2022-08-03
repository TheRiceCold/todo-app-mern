import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
  done: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("todo", TodoSchema);
