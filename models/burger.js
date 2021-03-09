const orm = require("../config/orm");

const burgers = {
  allBurgers(callback) {
    orm.selectAll("burgers", (res) => callback(res));
  },
  addBurger(burgerName, callback) {
    orm.insertOne("burgers", "burger_name", burgerName, (res) => callback(res));
  },
  devourOne(burgerId, callback) {
    console.log(burgerId);
    orm.updateOne("burgers", "devoured", 1, "id", burgerId, (res) =>
      callback(res)
    );
  },
};

module.exports = burgers;
