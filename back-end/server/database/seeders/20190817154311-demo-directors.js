"use strict";
const faker = require("faker");
const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    birthday: faker.date.past(),
    country: "US",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Director", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Director", null, {});
  },
};
