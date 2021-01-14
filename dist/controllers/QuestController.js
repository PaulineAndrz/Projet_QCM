"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questController = void 0;
var QuestService_1 = require("./../services/QuestService");
var QuestController = /** @class */ (function () {
    function QuestController() {
    }
    QuestController.prototype.findAll = function (req, res) {
        var data = QuestService_1.questService.findAll().then(function (data) {
            res.json(data);
        });
    };
    QuestController.prototype.create = function (req, res) {
        QuestService_1.questService.create(req.body).then(function (data) {
            res.json(data);
        });
    };
    QuestController.prototype.findById = function (req, res) {
        var id = req.params.id;
        QuestService_1.questService.findById(id).then(function (data) { return res.json(data); });
    };
    QuestController.prototype.deleteById = function (req, res) {
        var id = req.params.id;
        QuestService_1.questService.deleteById(id).then(function (data) {
            res.json(data);
        });
    };
    QuestController.prototype.updateById = function (req, res) {
        var id = req.params.id;
        var question = req.body.question;
        QuestService_1.questService.updateById(id, question).then(function (data) {
            res.json(data);
        });
        //                       PAS FINI                  !!!!!!
    };
    return QuestController;
}());
exports.questController = Object.freeze(new QuestController());
//# sourceMappingURL=QuestController.js.map