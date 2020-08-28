require('dotenv').config()

module.exports = {
    development: {
        dialect: 'postgres',
        host: 'db',
        username: 'postgres',
        password: 'postgres',
        database: 'budaburger',
        define: {
            timestamps: true
        }
    },
    production: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        define: {
            timestamps: true
        },
        dialectOptions: {
            ssl: true
        }
    },
    
}
