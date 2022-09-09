const { mongo, default: mongoose } = require("mongoose");

module.exports = (operations) => {
  return {
    async find(req, res) {
      const object = req.body;
      
      const result = await operations.find(object);
      console.log()
      if(result && result.userid)
      {
        res.json(result);
      } else {
        res.json({message: "Not found"});
      }
    },
    async add(req, res) {
      const object = req.body;
      console.log(req.body);
      object.userid = mongoose.Types.ObjectId(object.userid);
      const result = await operations.add(object);
      if (result && result.userid) {
        res.json({ message: "Record Added" });
      } else {
        res.json({ message: "Record not Added..." });
      }
    },
    async delete(req, res) {
      const object = req.body;
      const result = await operations.delete(object);
      console.log(result);
      if (result) {
        res.json({ message: "record deleted" });
      }
    },
    async update(req, res) {
      const object = req.body;
      const result = await operations.update(object);
      if (result && result.userid) {
        res.json({ message: "Record Updated" });
      } else {
        res.json({ message: "Record not Updated..." });
      }
    },
  };
};
