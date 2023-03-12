const {
  addClasses,
  getClasses,
  getClass,
  updateClasses,
  deleteClasses,
} = require("../controllers/class");
const {
  addClassesStandard,
  getClassesStandards,
  getClassesStandard,
  updateClassesStandard,
  deleteClassesStandard,
  getClassesStandardClasses,
} = require("../controllers/classSTandard");

const router = require("express").Router();

// standards
router.get("/standards/classes/:id", getClassesStandardClasses);
router.post("/standards", addClassesStandard);
router.get("/standards", getClassesStandards);
router.get("/standards/:id", getClassesStandard);
router.patch("/standards/:id", updateClassesStandard);
router.delete("/standards/:id", deleteClassesStandard);

router.post("/", addClasses);
router.get("/", getClasses);
router.get("/:id", getClass);
router.patch("/:id", updateClasses);
router.delete("/:id", deleteClasses);

router.all("*", (_, res) => {
  res.status(404).send({
    errMessage: "Page Not Found",
  });
});

module.exports = router;
