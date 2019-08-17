"use strict";
const uuid = require("uuid");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Actor",
      [
        {
          name: "David Benioff",
          birthday: new Date(),
          country: "US",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "David Petrarca",
          birthday: new Date(),
          country: "Germany",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neil Marshall",
          birthday: new Date(),
          country: "US",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Michael Slovis",
          birthday: new Date(),
          country: "UK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Jack Bender",
          birthday: new Date(),
          country: "South Africa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matt Shakman",
          birthday: new Date(),
          country: "US",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "D.B. Weiss",
          birthday: new Date(),
          country: "Wales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dave Hill",
          birthday: new Date(),
          country: "US",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brian Kirk",
          birthday: new Date(),
          country: "Holland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jeremy Podeswa",
          birthday: new Date(),
          country: "Mexico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Actor", null, {});
  },
};
