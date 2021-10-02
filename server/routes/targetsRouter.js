const Router = require("express");
const router = new Router();
const targetsController = require("../controllers/targetsController");
router.post("/", targetsController.create);
 router.get("/", targetsController.getAll);
 router.get("/completed", targetsController.getCompleted);
 router.put("/", targetsController.update);
 router.put("/update", targetsController.updateCompletedStatus);
/*  router.get("/:id"); */
router.delete("/", targetsController.delete); 

module.exports = router;
