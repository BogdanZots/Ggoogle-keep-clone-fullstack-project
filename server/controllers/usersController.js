const bcrypt = require("bcrypt");
const { User } = require("../models/models");
const jwt = require("jsonwebtoken");
const generateJwt = (id, email, name) => {
  return jwt.sign({ id, email, name }, "SECRET", {
    expiresIn: "24h",
  });
};

class UsersController {
  async registration(req, res, next) {
    const { email, password, name } = req.body.body;
    const salt = 5;
/*     const candidate = await User.findOne({ where: { email } }); */
 /*    if (candidate) {
      return null;
    } */
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ email, name , password: hashPassword });



    const token = generateJwt(user.id, user.email, user.name);

    return res.json({ token });
  }

  async login(req, res, next) {

    const { email, password } = req.body.body;
    console.log(req.body,email,password)

    const user = await User.findOne({ where: { email } });

   if(!user){
     return res.json(false)
   }


    let comparePassword = bcrypt.compareSync(password, user.password);
      
       if(!comparePassword){
       return res.json(false)
     } 
      const token = generateJwt(user.id, user.email, user.name);

    return res.json(token);
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role )
    console.log(req.user.email)
    res.json({message :  "All okay"})
  }
}

module.exports = new UsersController();
