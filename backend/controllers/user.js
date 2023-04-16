const connection = require("../db/connection");
const jwt = require("jsonwebtoken");

const addUser = (req, res) => {
  // Create user and add token
  connection.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    connection.query(
      "INSERT INTO users SET ?",
      req.body,
      function (error, results) {
        if (error) {
          return connection.rollback(function () {
            res.status(400).send({});
          });
        }

        const id = results.insertId;
        const token = jwt.sign({ id }, "jsusiuysyusysyusy");

        connection.query(
          "INSERT INTO user_tokens (user_token_id, token) VALUES(?, ?)",
          [id, token],
          function (error, results) {
            if (error) {
              return connection.rollback(function () {
                throw error;
              });
            }
            connection.commit(function (err) {
              if (err) {
                return connection.rollback(function () {
                  throw err;
                });
              }
              req.session.token = token;
              console.log("done");
              res.status(201).json({ token });
            });
          }
        );
      }
    );
  });
};

const getUsers = (req, res) => {
  const query =
    "SELECT id, first_name, last_name, email, phone, role, school_id, created_at, updated_at FROM users";
  connection.query(query, function (err, results) {
    if (err) return res.status(400).send(new Object(err));

    return res.send({
      results,
      count: results.length,
    });
  });
};

const getUser = (req, res) => {
  const { id } = req.params;

  const query =
    "SELECT id, first_name, last_name, email, phone, role, school_id, created_at, updated_at FROM users WHERE id=?";
  connection.query(query, id, function (err, results) {
    if (err) return res.status(400).send(new Object(err));

    return res.send({
      results,
    });
  });
};

const updateUser = (req, res) => {
  // id url query
  const { id } = req.params;
  // update updated_ay
  req.body.updated_at = new Date(Date.now());

  //   make sql string for update
  let query = "UPDATE users SET ";
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

  // update users in db
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
    getUser(req, res);
  });
};

const deleteUser = (req, res) => {
  // id url query
  const { id } = req.params;

  connection.query("DELETE FROM users WHERE id=?", id, function (err, results) {
    if (err) {
      return res.status(400).send(new Object(err));
    }

    if (results.affectedRows < 1) {
      return res.status(404).send({});
    }

    return res.status(200).send({});
  });
};

module.exports = { getUsers, addUser, getUser, updateUser, deleteUser };
