module.exports = (operations) => {
  return {
    async read(req, res) {
      const object = req.body;
      const result = await operations.read(object, res);
    },
    async add(req, res) {
      const object = req.body;
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
