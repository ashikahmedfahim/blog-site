const jwt = require("jsonwebtoken");
const { ExpressError } = require("../utilities");

module.exports.isAuthenticated = (req, res, next) => {
  try {
    const auth = req.header("Authorization");
    if (!auth) throw new Error(`Token not found!`);
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) throw new ExpressError(401, "Invalid token");
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
