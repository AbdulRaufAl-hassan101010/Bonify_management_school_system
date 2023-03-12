const connection = require("../db/connection");

const addClassesStandard = (req, res) => {
  const data = req.body;

  // insert ClassesStandard in db
  connection.query(
    "INSERT INTO classes_standard SET ?",
    data,
    function (err, _) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      return res.status(201).send({});
    }
  );
};

const getClassesStandards = (_, res) => {
  // get classes_standard in db
  connection.query("SELECT * FROM classes_standard", function (err, result) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send(result);
  });
};

const getClassesStandard = (req, res) => {
  const { id } = req.params;

  // get school in db
  connection.query(
    "SELECT * FROM classes_standard WHERE id=?",
    [id],
    function (err, result) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      if (result.length < 1) {
        return res.status(404).send({
          errMessage: "Not found",
        });
      }

      return res.status(200).send(result);
    }
  );
};

const getClassesStandardClasses = (req, res) => {
  const { id } = req.params;

  // get school in db
  connection.query(
    `
      SELECT 
      classes_standard.id AS id,
      classes_standard.name AS class_statndard_name,
      schools.id AS school_id,
      schools.name AS school_name,
      schools.email AS school_email,
      schools.phone AS school_phone,
      classes.name AS class_name
      FROM classes_standard  
      JOIN classes 
        ON classes_standard.id = classes.standard_id 
      JOIN  schools
        ON classes_standard.school_id = schools.id
      WHERE classes_standard.id = ?
    `,
    [id],
    function (err, results) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      if (results.length < 1) {
        return res.status(404).send({
          errMessage: "Not found",
        });
      }

      // dont send password to client
      results.forEach((result) => {
        delete result.password;
      });

      return res.status(200).send({ results, count: results.length });
    }
  );
};

const updateClassesStandard = (req, res) => {
  // id url query
  const { id } = req.params;

  //   make sql string for update
  let query = "UPDATE classes_standard SET ";
  const keys = Object.keys(req.body);
  const placeholders = [];
  keys.forEach((key, index) => {
    if (index !== 0) {
      query += `, `;
    }
    query += ` ${key}=? `;
    placeholders.push(req.body[key]);
  });
  query += `WHERE id=?`;

  // update school in db
  connection.query(query, [...placeholders, id], function (err, result) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    if (result.affectedRows < 1) {
      return res.status(404).send({
        errMessage: "Not found",
      });
    }

    // get user in db
    getClassesStandard(req, res);
  });
};

const deleteClassesStandard = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query(
    "DELETE FROM classes_standard WHERE id=?",
    id,
    function (err, results) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      if (results.affectedRows < 1) {
        return res.status(404).send({});
      }

      return res.status(200).send({});
    }
  );
};

module.exports = {
  addClassesStandard,
  getClassesStandards,
  getClassesStandard,
  updateClassesStandard,
  deleteClassesStandard,
  getClassesStandardClasses,
};
