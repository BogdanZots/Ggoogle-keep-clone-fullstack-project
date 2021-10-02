const {Sequelize} = require('sequelize') // эта штука позволяет  легче писать запросы к бд

module.exports = new Sequelize('google_keep_clone','postgres','7710', // настройка бд

    {  
        dialect:'postgres',
        host:process.env.DB_HOST,
        port:process.env.DB_PORT
    }
)