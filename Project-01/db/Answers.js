import { Sequelize } from "sequelize";
import connection from "./database.js";

const Answers = connection.define('Answers', {
  questionID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Answers.sync({force: false});

export default Answers;