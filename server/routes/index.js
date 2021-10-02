const Router = require("express");
const router = new Router();
const remindsRouter = require('./remindsRouter')
const targetsRouter = require('./targetsRouter')

 // обьеденяем все роутеры в один
router.use("/reminds", remindsRouter); //  первый пар. url по которому сработает , 2 эл . эл роутера
router.use("/targets",targetsRouter)

module.exports = router;
