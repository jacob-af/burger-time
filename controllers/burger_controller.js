const express = require("express");
const router = express.Router();
const burgers = require("../models/burger");

router.get("/", (req, res) => {
  burgers.allBurgers((data) => {
    const handleBarObject = {
      burgers: data,
    };
    console.log(handleBarObject);
    res.render("index", handleBarObject);
  });
});

router.post("/api/burgers", (req, res) => {
  console.log(req.body);
  burgers.addBurger(req.body.burger_name, (data) => {
    res.json(data);
  });
});

router.put("/api/burger/:id", (req, res) => {
  burgers.devourOne(req.params.id, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
