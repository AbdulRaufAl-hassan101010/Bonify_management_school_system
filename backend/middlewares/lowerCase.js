const lowerCase = (req, _, next) => {
  const data = req.body;

  // return data in lower case
  for (let key in data) {
    field = data[key];
    if (typeof field === "string") {
      data[key] = field.toLowerCase();
    }
  }

  next();
};

module.exports = lowerCase;
