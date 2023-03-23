const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    res.render("adduser");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const user = await User.create(req.body);
    res.render("adduser", { alert: "User added successfully." });
    console.log(`added user from submission`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
