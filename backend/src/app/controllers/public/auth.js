const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../../models/index");
const { DataValidator, ModelService, ExpressError } = require("../../utilities");

module.exports.login = async (req, res, next) => {
  const { error, value } = DataValidator.isValidUserLoginObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const user = await User.findOne({ email: value.email });
  if (!user) throw new ExpressError(400, "User not found");
  const isValidUser = await bcrypt.compare(value.password, user.password);
  if (!isValidUser) throw new ExpressError(401, "Invalid credentials");
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 3600,
    }
  );
  ModelService.successResponse(
    res,
    200,
    { token },
    "User logged in successfully"
  );
};
