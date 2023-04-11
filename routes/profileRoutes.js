const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.get("/", profileController.profile_get);
router.post("/:id/changeusername", profileController.profile_change_username);
router.post("/:id/changeuseremail", profileController.profile_change_useremail);
router.put(
  "/:id/changeuserpassword",
  profileController.profile_change_userpassword
);

module.exports = router;
