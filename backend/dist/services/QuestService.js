"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questService = void 0;
var QuestRepository_1 = require("../repositories/QuestRepository");
var QuestService = /** @class */ (function () {
    function QuestService() {
    }
    QuestService.prototype.findAll = function () {
        return QuestRepository_1.questRepository.findAll();
    };
    QuestService.prototype.create = function (quest) {
        return QuestRepository_1.questRepository.create(quest);
    };
    QuestService.prototype.findById = function (id) {
        return QuestRepository_1.questRepository.findById(id);
    };
    QuestService.prototype.deleteById = function (id) {
        return QuestRepository_1.questRepository.deleteById(id);
    };
    QuestService.prototype.updateById = function (id, update) {
        return QuestRepository_1.questRepository.updateById(id, update);
    };
    return QuestService;
}());
exports.questService = Object.freeze(new QuestService());
//# sourceMappingURL=QuestService.js.map