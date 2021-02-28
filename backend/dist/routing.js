"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRouting = void 0;
var QuestionController_1 = require("./controllers/QuestionController");
var setRouting = function (server) {
    server.get('/question', QuestionController_1.questionController.findAll);
    server.post('/question', QuestionController_1.questionController.create);
    server.get('/question/:id', QuestionController_1.questionController.findById);
    server.delete('/question/:id', QuestionController_1.questionController.deleteById);
    server.put('/question/:id', QuestionController_1.questionController.updateById);
};
exports.setRouting = setRouting;
//# sourceMappingURL=routing.js.map