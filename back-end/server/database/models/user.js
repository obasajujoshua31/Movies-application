const global = require("../../utils/global");

module.exports = (sequelize, Sequelize) => {
  const userSchema = {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Date.now(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Date.now(),
    },
  };

  const user = sequelize.define("User", userSchema, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: newUser => {
        newUser.password = global.hashPassword(newUser.password);
        return newUser.password;
      },
    },
  });

  // generateToken Instance method
  user.prototype.generateToken = function() {
    return global.generateToken(this.id);
  };

  user.prototype.matchPassword = function(password) {
    return global.comparePassword(password, this.password);
  };

  return user;
};
