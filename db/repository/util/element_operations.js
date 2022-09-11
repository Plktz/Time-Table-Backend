const { default: mongoose } = require("mongoose");

module.exports = (Model) => {
  return {
    add(object) {
      return Model.create(object);
    },
    async find(object) {
      const idKeys = [];
      Object.keys(Model.schema.tree).forEach((key) => {
        if (Model.schema.path(key) instanceof mongoose.SchemaTypes.ObjectId) {
          idKeys.push(key);
        }
      });
      const doc = await Model.findOne({
        userid: mongoose.Types.ObjectId(object.userid),
        name: object.name,
      }).populate(idKeys.join(" ")).exec();
      return doc;
    },
    update(object) {
      return Model.findOneAndUpdate(
        { name: object.name, userid: object.userid },
        object,
        { new: true }
      );
    },
    delete(object) {
      return Model.findOneAndDelete({
        name: object.name,
        userid: object.userid,
      });
    },
  };
};
