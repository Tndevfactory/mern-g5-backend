const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
  res.status(200).json({ controller: "auth", method: "register" });
});

module.exports = { register };
