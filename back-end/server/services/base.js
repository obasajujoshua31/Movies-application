// Base repository for models

// find a single row by options from a table
module.exports.findSingle = async (model, options, relations = {}) => {
  return await model.findOne({
    where: {
      [Object.keys(options)]: Object.values(options),
    },
    ...relations,
  });
};

// create a new row by payload
module.exports.save = async (model, payload) => {
  return await model.create(payload);
};

module.exports.findAllInstances = async (model, relations = {}) => {
  return await model.findAll(relations);
};
