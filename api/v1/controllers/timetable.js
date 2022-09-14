const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const logger = require("../../../utils/app-logger")(__filename);
const operations = require("../../../db/repository/timetable_operations");

module.exports = {
  async create(req, res) {
    const object = req.body;
    const result = await operations.create({
      userid: mongoose.Types.ObjectId(object.userid),
      periods: object.periods,
      days: object.days,
    });
    if (result) {
      res.json({ flag: true, result: result });
    } else {
      res.json({ flag: false, message: "coudn't make time table" });
    }
  },
};

//grid[day][period][room]
