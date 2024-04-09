import { Sequelize } from "sequelize";
import connection from "./database.js";

const Articles = connection.define('Articles', {
  title: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Answers.sync({force: false});

export default Answers;