const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const router = require("express").Router();

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
