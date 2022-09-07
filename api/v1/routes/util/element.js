
const {ADD, UPDATE, READ, DELETE} = require('../../../../utils/config/app-constants').ROUTES.ELEMENT;

module.exports = (controller, routes) => {
    routes.post(ADD, controller.add);
    routes.post(UPDATE, controller.update);
    routes.post(READ, controller.read);
    routes.post(DELETE, controller.delete);
};
