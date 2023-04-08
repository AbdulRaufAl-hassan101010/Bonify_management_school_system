const router = require("express").Router();
const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const {
  addUserAddress,
  getUsersAddress,
  getUserAddress,
  updateUserAddress,
  deleteUserAddress,
} = require("../controllers/userAddress");
const {
  addUserDetails,
  getUsersDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require("../controllers/userDetails");


// address
router.post("/address", addUserAddress);
router.get("/address", getUsersAddress);
router.get("/address/:id", getUserAddress);
router.patch("/address/:id", updateUserAddress);
router.delete("/address/:id", deleteUserAddress);

// details
router.post("/details", addUserDetails);
router.get("/details", getUsersDetails);
router.get("/details/:id", getUserDetails);
router.patch("/details/:id", updateUserDetails);
router.delete("/details/:id", deleteUserDetails);

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);


router.all("*", (_, res) => {
  res.status(404).send({
    errMessage: "Page Not Found",
  });
});

module.exports = router;
