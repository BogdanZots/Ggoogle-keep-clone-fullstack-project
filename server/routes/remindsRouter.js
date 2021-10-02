const Router = require("express");
const router = new Router();
const remindsController = require("../controllers/remindsController");
router.post("/", remindsController.create);
 router.get("/", remindsController.getAll);
 router.put("/", remindsController.update);
/*  router.get("/:id"); */
router.delete("/", remindsController.delete); 

module.exports = router;
