const app = require("./app");
const sequelize = require("./utils/connection");
require("./models");

const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    sequelize.sync();
<<<<<<< HEAD
    /* sequelize.sync({ force: true });*/
=======
    // sequelize.sync({ force: true });
>>>>>>> dbf4aac1708f4e605c56c58172530ba68c80dfe7
    console.log("DB connected");
    app.listen(PORT);
    console.log(`👉 Server running on port ${PORT}`);
    console.log(`👉 Link http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
