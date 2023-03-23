const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const adduserRoutes = require("./adduserRoutes");
const edituserRoutes = require("./edituserRoutes");
const viewuserRoutes = require("./viewuserRoutes");

router.use("/adduser", adduserRoutes);
router.use("/edituser", edituserRoutes);
router.use("/viewuser", viewuserRoutes);
router.use("/", homeRoutes);

module.exports = router;
