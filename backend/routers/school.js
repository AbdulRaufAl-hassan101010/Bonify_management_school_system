const router = require("express").Router();

const {
  getSchools,
  getSchool,
  addSchool,
  updateSchool,
  deleteSchool,
} = require("../controllers/school");

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
