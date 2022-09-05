
module.exports = (controller, routes) => {
    routes.post("/add", controller.add);
    routes.post("/update", controller.update);
    routes.post("/read", controller.read);
    routes.post("/delete", controller.delete);
};
