const jwt = require("jsonwebtoken");

exports.authantication = async (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ").at(-1);

    if (!token) return res.status(403).send({ msg: "Provide Token" });

    const decodeed = await jwt.verify(token, "hello");

    req.user = decodeed;
    next();
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, error: error.message, message: "" });
  }
};
