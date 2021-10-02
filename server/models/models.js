const sequelize = require("../db");
const { DataTypes } = require("sequelize"); // при помощи этого опис. типы

const RemindsTasks = sequelize.define("reminds", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  text: { type: DataTypes.STRING, unique: true, allowNull: false },
  typeId: { type: DataTypes.STRING, unique: false, allowNull: true },
  endDate: { type: DataTypes.STRING, unique: false, allowNull: true },
});
const TargetsTasks = sequelize.define("targets", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  text: { type: DataTypes.STRING, unique: true, allowNull: false },
  typeId: { type: DataTypes.STRING, unique: false, allowNull: true },
  isCompleted : { type : DataTypes.BOOLEAN , unique : false , allowNull : true},
  endDate: { type: DataTypes.STRING, unique: false, allowNull: true },
});


module.exports = {
  RemindsTasks,
  TargetsTasks
};
