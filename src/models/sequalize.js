import { Sequelize } from "sequelize";
import dbconfig from '../config/db.config.js';
const {DB,USER,PASSWORD,HOST,dialect,pool}=dbconfig;

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    pool: pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {sequelize};