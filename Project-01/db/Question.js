import { Sequelize } from "sequelize";
import connection from "./database.js";

const Question = connection.define('questions', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Question.sync({force: false}).then(()=>{});