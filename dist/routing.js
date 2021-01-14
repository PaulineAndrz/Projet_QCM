"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRouting = void 0;
var QuestController_1 = require("./controllers/QuestController");
var setRouting = function (server) {
    server.get('/question', QuestController_1.questController.findAll);
    server.post('/question', QuestController_1.questController.create);
    server.get('/question/:id', QuestController_1.questController.findById);
    server.delete('/question/search/:id', QuestController_1.questController.deleteById);
    server.post('/question/update/:id', QuestController_1.questController.updateById);
};
exports.setRouting = setRouting;
//# sourceMappingURL=routing.js.map