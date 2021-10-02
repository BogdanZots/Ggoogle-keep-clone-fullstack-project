const express = require("express"); // импортируем модуль express
const sequelize = require("./db"); // бд
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const urlencode = require("urlencode");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 5001;
const app = express(); // создаём express сервер
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use(bodyParser.json()) */
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router); // по какому url должен обрабаываться роут
const start = async () => {
  try {
    await sequelize.authenticate(); // подключение к бд
    await sequelize.sync(); // сверяет бд со схемой данных
    app.listen(PORT, () => console.log(`Server startesd on po1rt ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
