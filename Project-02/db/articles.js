import { Sequelize } from "sequelize";
import connection from "./database.js";
import Categories from "categories.js";

const Articles = connection.define('Articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}).begins(Categories)

Articles.sync({force: false});

export default Answers;