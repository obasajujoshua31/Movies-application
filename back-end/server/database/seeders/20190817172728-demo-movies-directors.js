"use strict";
const uuid = require("uuid/v4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "movies_directors",
      [
        {
          movieId: 1,
          directorId: 2,
        },
        {
          movieId: 1,
          directorId: 1,
        },
        {
          movieId: 1,
          directorId: 3,
        },
        {
          movieId: 2,
          directorId: 4,
        },
        {
          movieId: 2,
          directorId: 5,
        },
        {
          movieId: 2,
          directorId: 6,
        },
        {
          movieId: 3,
          directorId: 7,
        },
        {
          movieId: 3,
          directorId: 8,
        },
        {
          movieId: 3,
          directorId: 9,
        },
        {
          movieId: 4,
          directorId: 10,
        },
        {
          movieId: 4,
          directorId: 1,
        },
        {
          movieId: 4,
          directorId: 2,
        },
        {
          movieId: 5,
          directorId: 3,
        },
        {
          movieId: 5,
          directorId: 4,
        },
        {
          movieId: 5,
          directorId: 5,
        },
        {
          movieId: 6,
          directorId: 6,
        },
        {
          movieId: 6,
          directorId: 7,
        },
        {
          movieId: 6,
          directorId: 8,
        },
        {
          movieId: 7,
          directorId: 9,
        },
        {
          movieId: 7,
          directorId: 10,
        },
        {
          movieId: 7,
          directorId: 1,
        },
        {
          movieId: 8,
          directorId: 2,
        },
        {
          movieId: 8,
          directorId: 3,
        },
        {
          movieId: 8,
          directorId: 4,
        },
        {
          movieId: 9,
          directorId: 5,
        },
        {
          movieId: 9,
          directorId: 6,
        },
        {
          movieId: 9,
          directorId: 7,
        },
        {
          movieId: 10,
          directorId: 8,
        },
        {
          movieId: 10,
          directorId: 9,
        },
        {
          movieId: 10,
          directorId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("movies_directors", null, {});
  },
};
