'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserToken = sequelize.define('UserToken', {
    uuid:{
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userUuid: {      
      type: DataTypes.UUID
    },
    token: DataTypes.UUID
  }, {});
  UserToken.associate = function(models) {
    UserToken.belongsTo(models.Users, { foreignKey: 'userUuid' });
  };
  return UserToken;
};