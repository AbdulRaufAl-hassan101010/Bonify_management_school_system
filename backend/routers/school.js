const router = require("express").Router();

const {
  getSchools,
  getSchool,
  addSchool,
  updateSchool,
  deleteSchool,
} = require("../controllers/school");
const {
  addSchoolAddress,
  getSchoolsAddress,
  getSchoolAddress,
  updateSchoolAddress,
  deleteSchoolAddress,
} = require("../controllers/schoolAddress");

// address
router.post("/address", addSchoolAddress);
router.post("/address/:id", addSchoolAddress);
router.get("/address", getSchoolsAddress);
router.get("/address/:id", getSchoolAddress);
router.patch("/address/:id", updateSchoolAddress);
router.delete("/address/:id", deleteSchoolAddress);

router.post("/", addSchool);
router.get("/", getSchools);
router.get("/:id", getSchool);
router.patch("/:id", updateSchool);
router.delete("/:id", deleteSchool);

router.all("*", (_, res) => {
  res.status(404).send({
    errMessage: "Page Not Found",
  });
});

module.exports = router;
