import { Sequelize } from "sequelize";

const database = new Sequelize('', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnection = async () => {
    try {
        await database.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export { database, testConnection }