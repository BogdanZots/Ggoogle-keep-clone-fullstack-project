/* const { where } = require("sequelize/types"); */
const { RemindsTasks } = require("../models/models");

class RemindsController {
  async create(req, res) {
    const { name, text, typeId, endDate, userId } = req.body.body;
    console.log("req body", req.body.body);
    console.log(req.body);
    const remindsItem = await RemindsTasks.create({
      name,
      text,
      typeId,
      endDate,
      userId,
    });
    return res.json(remindsItem);
  }

  async getAll(req, res) {
    const { userId } = req.query;
    console.log(req.query, userId);
    const reminds = await RemindsTasks.findAll({
      where: {
        userId,
      },
    });
    return res.json(reminds);
  }
  async update(req, res) {
    console.log(req.body);
    const { name, text, typeId, searchId, endDate } = req.body;
    console.log(req.body);
    const updatedReminds = await RemindsTasks.update(
      { name, text, endDate },
      { where: { id: searchId } }
    );
    return res.json(updatedReminds);
  }
  async delete(req, res) {
    console.log(req.body);
    const { id } = req.body;
    console.log(req.body);
    const deletedReminds = await RemindsTasks.destroy({
      where: {
        id: id,
      },
    });
    return res.json(deletedReminds);
  }
}

module.exports = new RemindsController();
