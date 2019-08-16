module.exports.findSingle = async (model, options) => {
  return await model.findOne({
    [Object.keys(options)]: Object.values(options),
  });
};

module.exports.save = async (model, payload) => {
  return await model.create(payload);
};
