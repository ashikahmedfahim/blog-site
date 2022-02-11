const { Post, Tag } = require("../../models/index");
const {
  DataValidator,
  ExpressError,
  ModelService,
} = require("../../utilities");

module.exports.getAll = async (req, res) => {
  let queryOptions = ModelService.queryOptions(req);
  const tags = await Tag.findAndCountAll(queryOptions);
  ModelService.successResponse(res, 200, tags);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findByPk(id);
  if (!tag) throw new ExpressError(404, "Tag not found");
  ModelService.successResponse(res, 200, tag);
};

module.exports.createOne = async (req, res) => {
  const { error, value } = DataValidator.isValidTagObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const tag = await Tag.create(value);
  if (!tag) throw new ExpressError(400, "Tag not created");
  ModelService.successResponse(res, 201, tag, "Tag created successfully");
};

module.exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findByPk(id);
  if (!tag) throw new ExpressError(404, "Tag not found");
  const { error, value } = DataValidator.isValidTagObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const updatedTag = await tag.update(value);
  if (!updatedTag) throw new ExpressError(400, "Tag not updated");
  ModelService.successResponse(
    res,
    200,
    updatedTag,
    "Tag updated successfully"
  );
};

module.exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findByPk(id);
  if (!tag) throw new ExpressError(404, "Tag not found");
  const deletedTag = await tag.destroy();
  if (!deletedTag) throw new ExpressError(400, "Tag not deleted");
  ModelService.successResponse(
    res,
    200,
    deletedTag,
    "Tag deleted successfully"
  );
};
