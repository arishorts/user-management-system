const router = require("express").Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    let user = await User.findAll({ where: { id: req.params.id } });
    res.render("viewuser", { user });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
