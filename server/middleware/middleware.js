const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    if (req.method === "OPTIONS"){
        next();
    } 
    
    try{
        const token = req.headers.authorization.split(' ')[1]; // Bearer asdfkasfaskjg
        
        if (!token){
            res.status(401).json({message:"Пользователь не авторизован"})
        }
        
        const decoded = jwt.verify(token,"SECRET");
        req.user = decoded;
        next();
        
    }catch(e){
       res.status(403).json({message:"Пользователь не авторизован"}); 
    }   
}