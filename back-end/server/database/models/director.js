module.exports = (sequelize, Sequelize) => {
  const directorSchema = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    birthday: {
      type: Sequelize.DATE,
    },
    country: {
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

  const director = sequelize.define("Director", directorSchema, {
    freezeTableName: true,
    timestamps: false,
  });

  director.associate = db => {
    director.belongsToMany(db.Movie, {
      foreignKey: "movieId",
      through: "movies_directors",
    });
  };

  return director;
};
