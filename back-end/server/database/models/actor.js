module.exports = (sequelize, Sequelize) => {
  const actorSchema = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
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

  const actor = sequelize.define("Actor", actorSchema, {
    freezeTableName: true,
    timestamps: false,
  });

  actor.associate = db => {
    actor.belongsToMany(db.Movie, {
      foreignKey: "movieId",
      through: "movies_actors",
    });
  };

  return actor;
};
