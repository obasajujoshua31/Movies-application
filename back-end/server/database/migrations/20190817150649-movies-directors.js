"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies_directors", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movie",
          key: "id",
        },
        allowNull: false,
      },
      directorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Director",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("movies_directors");
  },
};
