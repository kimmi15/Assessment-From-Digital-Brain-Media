const { default: mongoose } = require("mongoose");
const { Todo } = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { task, discription } = req.body;
    if (!task || !discription)
      return res.status(400).send({ msg: "Provide Details!" });

    req.body.user = req.user._id;

    await Todo.create(req.body);

    return res.status(200).send({ msg: "Todo Create!" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, error: error.message, message: "" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.query._id }, req.body);

    return res.status(200).send({ msg: "Updated Status!" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, error: error.message, message: "" });
  }
};
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) return res.status(400).send({ msg: "Provide Details!" });

    await Todo.updateOne({ _id: req.query._id }, { status });

    return res.status(200).send({ msg: "Updated Status!" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, error: error.message, message: "" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.query._id }, { status });

    return res.status(200).send({ msg: "Deleted Todo!" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, error: error.message, message: "" });
  }
};

exports.getTodo = async (req, res) => {
  try {
    let todo = await Todo.find(
      { user: new mongoose.Types.ObjectId(req.user._id) },
      { task: 1, discription: 1, status: 1, updatedAt: 1 }
    );

    return res.status(200).send({ msg: "Deleted Todo!", todo });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, error: error.message, message: "" });
  }
};
