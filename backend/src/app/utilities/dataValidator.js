const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.isValidUserObject = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const { error, value } = schema.validate({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
  });
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

module.exports.isValidPostObject = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    img_url: Joi.string(),
    user_id: Joi.objectId().required(),
  });
  const { error, value } = schema.validate(data);
  return { error, value };
};

module.exports.isValidTagObject = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
  });
  const { error, value } = schema.validate(data);
  return { error, value };
};
