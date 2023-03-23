const router = require("express").Router();
const User = require("../models/User");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const users = await User.findAll({ where: { status: "active" } });
    res.render("home", { users });
    // res.render("home", users);
    //res.status(200).json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        // first_name: req.body.search,
        first_name: {
          [Op.like]: `${req.body.search}%`,
        },
        status: "active",
      },
    });
    res.render("home", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let removedUser = await User.destroy({ where: { id: req.params.id } });
    //console.log(user);
    const users = await User.findAll({ where: { status: "active" } });
    // console.log(users);
    //res.redirect("/");
    res.render("home", { users, removedUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
