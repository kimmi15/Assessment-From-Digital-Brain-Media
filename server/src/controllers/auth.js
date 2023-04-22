const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone)
      return res.status(400).send({ msg: "Provide Details!" });

    await User.create(req.body);

    return res.status(200).send({ msg: "user Create!" });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message, msg: "Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send({ msg: "Provide Details!" });

    let user = await User.findOne({ email });

    if (!user) return res.status(404).send({ msg: "user not found!" });

    let token = jwt.sign({ _id: user._id }, "hello");

    return res.status(200).send({ msg: "Login!", token });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message, msg: "Error" });
  }
};
