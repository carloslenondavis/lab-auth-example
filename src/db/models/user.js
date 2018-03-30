'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    uuid: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    secret: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.UserToken, { foreignKey: 'userUuid' });
  };
  return User;
};