const { Post } = require("../../models/index");
const {
  DataValidator,
  ExpressError,
  ModelService,
} = require("../../utilities");

module.exports.getAll = async (req, res) => {
  let queryOptions = ModelService.queryOptions(req);
  const posts = await Post.findAndCountAll(queryOptions);
  ModelService.successResponse(res, 200, posts);
};

module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  if (!post) throw new ExpressError(404, "Post not found");
  ModelService.successResponse(res, 200, post);
};

module.exports.createOne = async (req, res) => {
  const { error, value } = DataValidator.isValidPostObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const post = await Post.create(value);
  if (!post) throw new ExpressError(400, "Post not created");
  ModelService.successResponse(res, 201, post, "Post created successfully");
};

module.exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  if (!post) throw new ExpressError(404, "Post not found");
  const { error, value } = DataValidator.isValidPostObject(req.body);
  if (error) throw new ExpressError(400, error.details[0].message);
  const updatedPost = await post.update(value);
  if (!updatedPost) throw new ExpressError(400, "Post not updated");
  ModelService.successResponse(
    res,
    200,
    updatedPost,
    "Post updated successfully"
  );
};

module.exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  if (!post) throw new ExpressError(404, "Post not found");
  const deletedPost = await post.destroy();
  if (!deletedPost) throw new ExpressError(400, "Post not deleted");
  ModelService.successResponse(
    res,
    200,
    deletedPost,
    "Post deleted successfully"
  );
};
