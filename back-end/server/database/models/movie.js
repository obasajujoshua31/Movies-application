module.exports = (sequelize, Sequelize) => {
  const movieSchema = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    scoutbase_rating: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now(),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now(),
    },
  };

  const movie = sequelize.define("Movie", movieSchema, {
    freezeTableName: true,
    timestamps: false,
  });

  movie.associate = db => {
    movie.belongsToMany(db.Actor, {
      foreignKey: "actorId",
      through: "movies_actors",
      as: "actors",
    });

    movie.belongsToMany(db.Director, {
      foreignKey: "directorId",
      through: "movies_directors",
      as: "directors",
    });
  };

  return movie;
};
