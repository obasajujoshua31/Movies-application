"use strict";
const uuid = require("uuid/v4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "movies_actors",
      [
        {
          movieId: 1,
          actorId: 2,
        },
        {
          movieId: 1,
          actorId: 1,
        },
        {
          movieId: 1,
          actorId: 3,
        },
        {
          movieId: 2,
          actorId: 4,
        },
        {
          movieId: 2,
          actorId: 5,
        },
        {
          movieId: 2,
          actorId: 6,
        },
        {
          movieId: 3,
          actorId: 7,
        },
        {
          movieId: 3,
          actorId: 8,
        },
        {
          movieId: 3,
          actorId: 9,
        },
        {
          movieId: 4,
          actorId: 10,
        },
        {
          movieId: 4,
          actorId: 1,
        },
        {
          movieId: 4,
          actorId: 2,
        },
        {
          movieId: 5,
          actorId: 3,
        },
        {
          movieId: 5,
          actorId: 4,
        },
        {
          movieId: 5,
          actorId: 5,
        },
        {
          movieId: 6,
          actorId: 6,
        },
        {
          movieId: 6,
          actorId: 7,
        },
        {
          movieId: 6,
          actorId: 8,
        },
        {
          movieId: 7,
          actorId: 9,
        },
        {
          movieId: 7,
          actorId: 10,
        },
        {
          movieId: 7,
          actorId: 1,
        },
        {
          movieId: 8,
          actorId: 2,
        },
        {
          movieId: 8,
          actorId: 3,
        },
        {
          movieId: 8,
          actorId: 4,
        },
        {
          movieId: 9,
          actorId: 5,
        },
        {
          movieId: 9,
          actorId: 6,
        },
        {
          movieId: 9,
          actorId: 7,
        },
        {
          movieId: 10,
          actorId: 8,
        },
        {
          movieId: 10,
          actorId: 9,
        },
        {
          movieId: 10,
          actorId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("movies_actors", null, {});
  },
};
