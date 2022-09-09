
const {ADD, UPDATE, FIND, DELETE} = require('../../../../utils/config/app-constants').ROUTES.ELEMENT;

module.exports = (controller, routes) => {
    routes.post(ADD, controller.add);
    routes.post(UPDATE, controller.update);
    routes.post(FIND, controller.find);
    routes.post(DELETE, controller.delete);
};
