import dotenv from "dotenv";

dotenv.config();

module.exports = {
    development: {
        username: process.env.DEVELOPMENT_USERNAME,
        password: process.env.DEVELOPMENT_PASSWORD,
        database: process.env.DEVELOPMENT_DATABASE,
        host: process.env.DEVELOPMENT_HOST,
        dialect: 'mariadb',
    },
    staging: {
        username: process.env.STAGING_USERNAME,
        password: process.env.STAGING_PASSWORD,
        database: process.env.STAGING_DATABASE,
        host: process.env.STAGING_HOST,
        dialect: 'mariadb',
    },
    production: {
        username: process.env.PRODUCTION_USERNAME,
        password: process.env.PRODUCTION_PASSWORD,
        database: process.env.PRODUCTION_DATABASE,
        host: process.env.PRODUCTION_HOST,
        dialect: 'mariadb',
    },
};