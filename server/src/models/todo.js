const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: String,
    discription: String,
    status: {
      type: String,
      default: "Pandding",
    },
    user: {
      type: String,
    },
  },
  { timestamps: true }
);

exports.Todo = mongoose.model("Todo", todoSchema);
