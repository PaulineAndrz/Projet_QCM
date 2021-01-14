"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionController = void 0;
var QuestionService_1 = require("../services/QuestionService");
var QuestionController = /** @class */ (function () {
    function QuestionController() {
    }
    QuestionController.prototype.findAll = function (req, res) {
        var data = QuestionService_1.questionService.findAll().then(function (data) {
            res.json(data);
        });
    };
    QuestionController.prototype.create = function (req, res) {
        QuestionService_1.questionService.create(req.body).then(function (data) {
            res.json(data);
        });
    };
    QuestionController.prototype.findById = function (req, res) {
        var id = req.params.id;
        QuestionService_1.questionService.findById(id).then(function (data) { return res.json(data); });
    };
    QuestionController.prototype.deleteById = function (req, res) {
        var id = req.params.id;
        QuestionService_1.questionService.deleteById(id).then(function (data) {
            res.json(data);
        });
    };
    QuestionController.prototype.updateById = function (req, res) {
        var id = req.params.id;
        var question = req.body.question;
        QuestionService_1.questionService.updateById(id, question).then(function (data) {
            res.json(data);
        });
    };
    return QuestionController;
}());
exports.questionController = Object.freeze(new QuestionController());
//# sourceMappingURL=QuestionController.js.map