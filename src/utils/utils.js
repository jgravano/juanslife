function transformModel(model) {
  const transformedModel = model.toObject();
  delete transformedModel._id;
  delete transformedModel.__v;
  return transformedModel;
};

module.exports = {
  transformModel: transformModel
};