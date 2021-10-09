const sequelize = require("../db");
const { DataTypes } = require("sequelize"); // при помощи этого опис. типы

const RemindsTasks = sequelize.define("reminds", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  text: { type: DataTypes.STRING, unique: true, allowNull: false },
  typeId: { type: DataTypes.STRING, unique: false, allowNull: true },
  endDate: { type: DataTypes.STRING, unique: false, allowNull: true },
  userId :  { type: DataTypes.INTEGER, unique : false , allowNull : false},
});
const TargetsTasks = sequelize.define("targets", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  text: { type: DataTypes.STRING, unique: true, allowNull: false },
  typeId: { type: DataTypes.STRING, unique: false, allowNull: true },
  isCompleted : { type : DataTypes.BOOLEAN , unique : false , allowNull : true},
  endDate: { type: DataTypes.STRING, unique: false, allowNull: true },
  userId :  { type: DataTypes.INTEGER, unique : false , allowNull : false},
});
const User = sequelize.define("user", {
  // название модели
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // при создании каждого обьекта по этой модели д. id++
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING},
});

module.exports = {
  RemindsTasks,
  TargetsTasks,
  User
};
