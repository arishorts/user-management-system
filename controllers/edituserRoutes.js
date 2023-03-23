const router = require("express").Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    let user = await User.findAll({ where: { id: req.params.id } });
    res.render("edituser", { user });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    let user = await User.update(req.body, { where: { id: req.params.id } });
    user = await User.findAll({ where: { id: req.params.id } });
    // res.render("edituser", { user });
    res.render("edituser", {
      user,
      alert: `${req.body.first_name} editted successfully.`,
    });
    console.log(`editted user in database`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
