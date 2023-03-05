const connection = require("../db/connection");

const addSchool = (req, res) => {
  const data = req.body;

  // return data in lower case
  for (let key in data) {
    field = data[key];
    if (typeof field === "string") {
      data[key] = field.toLowerCase();
    }
  }

  // insert school in db
  connection.query("INSERT INTO schools SET ?", data, function (err, result) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(201).send(data);
  });
};

const getSchools = (_, res) => {
  // get schools in db
  connection.query(
    "SELECT id, name, email, phone, created_at, updated_at FROM schools",
    function (err, result) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      return res.status(200).send(result);
    }
  );
};

const getSchool = (req, res) => {
  const { id } = req.params;

  // get school in db
  connection.query(
    "SELECT id, name, email, phone, created_at, updated_at FROM schools WHERE id=?",
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

const updateSchool = (req, res) => {
  // id url query
  const { id } = req.params;
  // update updated_ay
  req.body.updated_at = new Date(Date.now());

  //   make sql string for update
  let query = "UPDATE schools SET ";
  const keys = Object.keys(req.body);
  const placeholders = [];
  keys.forEach((key, index) => {
    if (index !== 0) {
      query += `, `;
    }
    query += ` ${key}=? `;
    placeholders.push(req.body[key]);
  });
  query += `WHERE id=? `;

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
    getSchool(req, res);
  });
};

const deleteSchool = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query("DELETE FROM schools WHERE id=?", id, function (err) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send({});
  });
};

module.exports = {
  addSchool,
  getSchools,
  getSchool,
  updateSchool,
  deleteSchool,
};
