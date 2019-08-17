"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies_actors", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movie",
          key: "id",
        },
        allowNull: false,
      },
      actorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Actor",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("movies_actors");
  },
};
