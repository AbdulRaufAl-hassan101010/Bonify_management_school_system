const connection = require("../db/connection");

const addSchoolDetails = (req, res) => {
  const data = req.body;

  //   convert date
  if (data.establish_date) data.establish_date = new Date(data.establish_date);

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
    "INSERT INTO schools_details SET ?",
    data,
    function (err, _) {
      if (err) {
        return res.status(400).send(new Object(err));
      }

      return res.status(201).send(data);
    }
  );
};

const getSchoolsDetails = (_, res) => {
  // get schools details in db
  connection.query("SELECT * FROM schools_details", function (err, results) {
    console.log(123);
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send({ results, count: results.length });
  });
};

const getSchoolDetails = (req, res) => {
  const { id } = req.params;

  console.log(123);

  // get school details in db
  connection.query(
    "SELECT * FROM schools_details WHERE school_id=?",
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

const updateSchoolDetails = (req, res) => {
  // id url query
  const { id } = req.params;
  // update updated_ay
  req.body.updated_at = new Date(Date.now());
  req.body.establish_date = new Date(req.body.establish_date);

  //   make sql string for update
  let query = "UPDATE schools_details SET ";
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
    getSchoolDetails(req, res);
  });
};

const deleteSchoolDetails = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query(
    "DELETE FROM schools_details WHERE school_id=?",
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
  addSchoolDetails,
  getSchoolsDetails,
  getSchoolDetails,
  updateSchoolDetails,
  deleteSchoolDetails,
};
