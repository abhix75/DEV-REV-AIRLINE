'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ticket.init({
    subject:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    content:{
      type:DataTypes.STRING,
      allowNull:false

    } ,
    recipentemail: {
      type:DataTypes.STRING,
      allowNull:false

    } ,
    status: {
      type:DataTypes.ENUM,
      values:["PENDING","SUCCESS","FAILED"],
      defaultValue:"PENDING",
      allowNull:false
    } ,
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};