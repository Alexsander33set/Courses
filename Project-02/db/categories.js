import { Sequelize } from "sequelize";
import connection from "./database.js";
import Articles from "./articles";

const Categories = connection.define('Categories', {
  title: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  }
}).any(Articles)

export default Categories;