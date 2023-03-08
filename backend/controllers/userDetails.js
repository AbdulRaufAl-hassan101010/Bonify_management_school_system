const connection = require("../db/connection");

const addUserDetails = (req, res) => {
  const data = req.body;

  // return data in lower case
  for (let key in data) {
    field = data[key];
    if (typeof field === "string") {
      data[key] = field.toLowerCase();
    }
  }

  if (req.params.id) req.body.user_id = req.params.id;

  // insert user in db
  connection.query("INSERT INTO users_details SET ?", data, function (err, _) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(201).send({});
  });
};

const getUsersDetails = (_, res) => {
  // get users details in db
  connection.query("SELECT * FROM users_details", function (err, results) {
    console.log(123);
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send({ results, count: results.length });
  });
};

const getUserDetails = (req, res) => {
  const { id } = req.params;

  console.log(123);

  // get user details in db
  connection.query(
    "SELECT * FROM users_details WHERE user_id=?",
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

const updateUserDetails = (req, res) => {
  // id url query
  const { id } = req.params;
  // update updated_at
  req.body.updated_at = new Date(Date.now());

  //   make sql string for update
  let query = "UPDATE users_details SET ";
  const keys = Object.keys(req.body);
  const placeholders = [];
  keys.forEach((key, index) => {
    if (index !== 0) {
      query += `, `;
    }
    query += ` ${key}=? `;
    placeholders.push(req.body[key]);
  });
  query += `WHERE user_id=? `;

  // update user in db
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
    getUserDetails(req, res);
  });
};

const deleteUserDetails = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query(
    "DELETE FROM users_details WHERE user_id=?",
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
  addUserDetails,
  getUsersDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
};
