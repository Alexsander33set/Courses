import { Sequelize } from "sequelize";
import 'dotenv/config';

const DB_HOST= process.env.DB_HOST;
const DB_NAME= process.env.DB_NAME;
const DB_USER= process.env.DB_USER;
const DB_PASSWORD= process.env.DB_PASSWORD;

const conn = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
  host: 'localhost',
  dialect: 'mysql'

})

export default conn