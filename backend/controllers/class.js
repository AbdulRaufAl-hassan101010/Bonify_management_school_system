const connection = require("../db/connection");

const addClasses = (req, res) => {
  const data = req.body;

  // insert Classes in db
  connection.query("INSERT INTO classes SET ?", data, function (err, _) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(201).send({});
  });
};

const getClasses = (_, res) => {
  // get classes in db
  connection.query("SELECT * FROM classes", function (err, result) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send({ result, count: result.length });
  });
};

const getClass = (req, res) => {
  const { id } = req.params;

  // get school in db
  connection.query(
    "SELECT * FROM classes WHERE id=?",
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

const updateClasses = (req, res) => {
  // id url query
  const { id } = req.params;

  //   make sql string for update
  let query = "UPDATE classes SET ";
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
    getClasses(req, res);
  });
};

const deleteClasses = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query(
    "DELETE FROM classes WHERE id=?",
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
  addClasses,
  getClasses,
  getClass,
  updateClasses,
  deleteClasses,
};
