const connection = require("../db/connection");

const addSchoolAddress = (req, res) => {
  const data = req.body;

  // return data in lower case
  for (let key in data) {
    field = data[key];
    if (typeof field === "string") {
      data[key] = field.toLowerCase();
    }
  }

  if (req.params.id) req.body.school_id = req.params.id;

  // insert school in db
  connection.query(
    "INSERT INTO schools_address SET ?",
    data,
    function (err, result) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      return res.status(201).send(data);
    }
  );
};

const getSchoolsAddress = (_, res) => {
  // get schools in db
  connection.query("SELECT * FROM schools_address", function (err, result) {
    console.log(123);
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send(result);
  });
};

const getSchoolAddress = (req, res) => {
  const { id } = req.params;

  console.log(123);

  // get school in db
  connection.query(
    "SELECT * FROM schools_address WHERE school_id=?",
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

const updateSchoolAddress = (req, res) => {
  // id url query
  const { id } = req.params;
  // update updated_ay
  req.body.updated_at = new Date(Date.now());

  //   make sql string for update
  let query = "UPDATE schools_address SET ";
  const keys = Object.keys(req.body);
  const placeholders = [];
  keys.forEach((key, index) => {
    if (index !== 0) {
      query += `, `;
    }
    query += ` ${key}=? `;
    placeholders.push(req.body[key]);
  });
  query += `WHERE school_id=? `;

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
    getSchoolAddress(req, res);
  });
};

const deleteSchoolAddress = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query(
    "DELETE FROM schools_address WHERE school_id=?",
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
  addSchoolAddress,
  getSchoolsAddress,
  getSchoolAddress,
  updateSchoolAddress,
  deleteSchoolAddress,
};
