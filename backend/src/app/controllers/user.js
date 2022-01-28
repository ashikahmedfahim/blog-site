const { User } = require("../models/index");
const { DataValidator, ExpressError } = require("../utilities");

module.exports.getAll = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

module.exports.getOne = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.status(200).json(user);
};

module.exports.createOne = async (req, res) => {
  const { error, value } = DataValidator.isValidUserObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const isUserExist = await User.findOne({
    where: { email: value.email },
  });
  if (isUserExist) throw new ExpressError(400, "This email is already registered");
  const user = await User.create(value);
  if (!user) throw new ExpressError(400, "User not created");
  res.status(201).json(user);
};

module.exports.updateOne = async (req, res) => {
  const user = await User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  });
  res.status(200).json(user);
};

module.exports.deleteOne = async (req, res) => {
  const user = await User.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json(user);
};
