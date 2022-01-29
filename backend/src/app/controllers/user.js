const { User } = require("../models/index");
const { DataValidator, ExpressError, ModelService } = require("../utilities");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.getAll = async (req, res) => {
  let queryOptions = ModelService.queryOptions(req);
  const users = await User.findAll(queryOptions);
  if (!users.length) throw new ExpressError(404, "Users not found");
  ModelService.successResponse(res, 200, users);
};

module.exports.getOne = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) throw new ExpressError(404, "User not found");
  ModelService.successResponse(res, 200, user);
};

module.exports.createOne = async (req, res) => {
  const { error, value } = DataValidator.isValidUserObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const isUserExist = await User.findOne({
    where: { email: value.email },
  });
  if (isUserExist)
    throw new ExpressError(400, "This email is already registered");
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(value.password, salt);
  const user = await User.create({ ...value, password: hashedPassword });
  if (!user) throw new ExpressError(400, "User not created");
  let token = jwt.sign(
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
    201,
    { token },
    "User Signed Up successfully"
  );
};

module.exports.updateOne = async (req, res) => {
  const user = await User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  });
  if (!user) throw new ExpressError(404, "User not found");
  ModelService.successResponse(res, 200, user, "User updated successfully");
};

module.exports.deleteOne = async (req, res) => {
  const user = await User.destroy({
    where: { id: req.params.id },
  });
  if (!user) throw new ExpressError(404, "User not found");
  ModelService.successResponse(res, 200, user, "User deleted successfully");
};
