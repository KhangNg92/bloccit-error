'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rule = sequelize.define('Rule', {
    title: DataTypes.STRING
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};