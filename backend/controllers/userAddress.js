const connection = require("../db/connection");

const addUserAddress = (req, res) => {
  const data = req.body;

  if (req.params.id) req.body.user_id = req.params.id;

  // insert school in db
  connection.query("INSERT INTO users_address SET ?", data, function (err, _) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(201).send(data);
  });
};

const getUsersAddress = (_, res) => {
  // get users in db
  connection.query("SELECT * FROM users_address", function (err, result) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    return res.status(200).send(result);
  });
};

const getUserAddress = (req, res) => {
  const { id } = req.params;

  console.log(123);

  // get school in db
  connection.query(
    "SELECT * FROM users_address WHERE user_id=?",
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

const updateUserAddress = (req, res) => {
  // id url query
  const { id } = req.params;
  // update updated_ay
  req.body.updated_at = new Date(Date.now());

  //   make sql string for update
  let query = "UPDATE users_address SET ";
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
    getUserAddress(req, res);
  });
};

const deleteUserAddress = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query(
    "DELETE FROM users_address WHERE user_id=?",
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
  addUserAddress,
  getUsersAddress,
  getUserAddress,
  updateUserAddress,
  deleteUserAddress,
};
