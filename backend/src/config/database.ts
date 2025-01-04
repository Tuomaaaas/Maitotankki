import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async (): Promise<Boolean> => {
    try {
        const databaseConnection = new Sequelize({
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DATABASE,
            host:  process.env.DATABASE_HOST,
            dialect: 'mariadb',
        });

        await databaseConnection.authenticate()
        console.log('Connected to the database successfully.');

        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);

        return false;
    }
}

export default connectDB