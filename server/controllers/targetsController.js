/* const { where } = require("sequelize/types"); */
const { TargetsTasks } = require("../models/models");

class TargetsController {
  async create(req, res) {
    const { name, text, isCompleted, typeId, endDate, userId } = req.body.body;
    const targetsItem = await TargetsTasks.create({
      name,
      text,
      typeId,
      isCompleted,
      endDate,
      userId,
    });
    return res.json(targetsItem);
  }

  async getAll(req, res) {
    let { userId } = req.query;
    const targets = await TargetsTasks.findAndCountAll({
      where: {
        userId,
      },
      order: [["id", "DESC"]],
    });
    console.log(targets);
    return res.json(targets);
  }
  async update(req, res) {
    const { name, text, searchId, endDate } = req.body;
    const updatedTargets = await TargetsTasks.update(
      { name, text, endDate },
      { where: { id: searchId } }
    );
    return res.json(updatedTargets);
  }
  async updateCompletedStatus(req, res) {
    const { isCompleted, id } = req.body;
    const updatedTargets = await TargetsTasks.update(
      { isCompleted },
      { where: { id } }
    );
    return res.json(updatedTargets);
  }
  async delete(req, res) {
    const { id } = req.body;
    const deletedTarget = await TargetsTasks.destroy({
      where: {
        id: id,
      },
    });
    return res.json(deletedTarget);
  }
  async getCompleted(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 3;
    let offset = page * limit - limit;
    const completedTargets = await TargetsTasks.findAndCountAll({
      limit,
      offset,
      order: [["id", "DESC"]],
      where: {
        isCompleted: true,
      },
    });
    return res.json(completedTargets);
  }
}

module.exports = new TargetsController();
