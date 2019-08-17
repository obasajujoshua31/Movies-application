
// Base repository for models

// find a single row by options from a table
module.exports.findSingle = async (model, options) => {
  return await model.findOne({
    where: {
      [Object.keys(options)]: Object.values(options),
    },
  });
};

// create a new row by payload
module.exports.save = async (model, payload) => {
  return await model.create(payload);
};
