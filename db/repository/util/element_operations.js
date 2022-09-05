module.exports = (Model) => {
    return {
        add(object) {
          return Model.create(object);
        },
        read(object, response) {
          console.log(object);
          Model.findOne({ userid: object.userid, name: object.name }, (err, doc) => {
            if (err) {
              response.json({ message: "Error in DB " });
              console.log(err);
            } else if (1) {
              // response.json(doc);
              response.json(doc);
              // console.log(doc);
            } else {
              response.json({ message: "Invalid info" });
            }
          });
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
      }
}