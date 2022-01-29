const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.isValidUserObject = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const { error, value } = schema.validate(data);
  return { error, value };
};

module.exports.isValidUserLoginObject = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const { error, value } = schema.validate(data);
  return { error, value };
};
