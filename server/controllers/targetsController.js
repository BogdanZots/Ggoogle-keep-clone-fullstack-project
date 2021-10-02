/* const { where } = require("sequelize/types"); */
const { TargetsTasks } = require("../models/models");

class TargetsController {
  async create(req, res) {
    const { name, text, isCompleted , typeId , endDate } = req.body.body;
    const targetsItem = await TargetsTasks.create({ name, text, typeId , isCompleted ,  endDate});
    return res.json(targetsItem);
  }

  async getAll(req, res) {
    const targets = await TargetsTasks.findAll();
    return res.json(targets);
  }
  async update(req, res) {
    const { name, text, searchId , endDate } = req.body;
    const updatedTargets = await TargetsTasks.update(
      { name, text ,endDate},
      { where: { id: searchId } }
    );
    return res.json(updatedTargets);
  }
  async updateCompletedStatus(req, res) {
    console.log('req body',req.body)
    const { isCompleted , id } = req.body;
    console.log('req body',req.body)
    const updatedTargets = await TargetsTasks.update(
      { isCompleted},
      { where: { id} }
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
    return res.json(deletedTarget)
  }
  async getCompleted(req,res) {
    const completedTargets= await TargetsTasks.findAll({
        where : {
            isCompleted : true
        }
    });
    return res.json(completedTargets);
  }
}

module.exports = new TargetsController();
