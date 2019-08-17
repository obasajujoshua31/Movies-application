const { findAllInstances, findSingle } = require("./base");
const { Movie, Actor, Director } = require("../database/models");

module.exports.findAllMovies = async () => {
  return await findAllInstances(Movie, {
    include: [
      {
        model: Actor,
        as: "actors",
      },
      {
        model: Director,
        as: "directors",
      },
    ],
  });
};

module.exports.findMovieByTitle = async title => {
  return await findSingle(
    Movie,
    { title },
    {
      include: [
        {
          model: Actor,
          as: "actors",
        },
        {
          model: Director,
          as: "directors",
        },
      ],
    }
  );
};
