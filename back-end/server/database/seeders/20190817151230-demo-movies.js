"use strict";
const uuid = require("uuid/v4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Movie",
      [
        {
          title: "The Disaster Artist",
          year: 2017,
          rating: 7,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Logan",
          year: 2017,
          rating: 8,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Cloverfield Lane",
          year: 2016,
          rating: 7,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "There Billboards Outside Ebbing, Missouri",
          year: 2017,
          rating: 8,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Captain America: Civil War",
          year: 2016,
          rating: 8,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "The Nice Guys",
          year: 2017,
          rating: 7,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Kong: Skull Island",
          year: 2017,
          rating: 7,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Get Out",
          year: 2017,
          rating: 8,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Thor: Ragnarok",
          year: 2017,
          rating: 8,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
        {
          title: "Baby Driver",
          year: 2017,
          rating: 8,
          updatedAt: "2019-07-01T06:51:46.357Z",
          createdAt: "2019-07-01T06:51:46.357Z",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movie", null, {});
  },
};
