const userOperations = require("../../../db/repository/user_operations");
module.exports = {
  async login(request, response) {
    const userObject = request.body;
    const result = await userOperations.read(userObject, response);
    if (result && result.userid ) {
      response.json(result);
    }
  },
  async register(request, response) {
    const userObject = request.body;
    const result = await userOperations.add(userObject);
    if (result && result.userid) {
      response.redirect("/login");
    } else {
      response.json({ message: "Record not Added..." });
    }
  },
};
