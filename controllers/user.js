const userOperations = require("../db/repository/user_operations");
module.exports = {
  login(request, response) {
    const userObject = request.body;
    const result = userOperations.read(userObject, response);
    if (result) {
    }
  },
  async register(request, response) {
    const userObject = request.body;
    const result = await userOperations.add(userObject);
    if (result && result.userid) {
      -response.redirect("/login");
    } else {
      response.json({ message: "Record not Added..." });
    }
  },
};
