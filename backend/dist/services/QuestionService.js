"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionService = void 0;
var QuestionRepository_1 = require("../repositories/QuestionRepository");
var QuestionService = /** @class */ (function () {
    function QuestionService() {
    }
    QuestionService.prototype.findAll = function () {
        return QuestionRepository_1.questionRepository.findAll();
    };
    QuestionService.prototype.create = function (question) {
        return QuestionRepository_1.questionRepository.create(question);
    };
    QuestionService.prototype.findById = function (id) {
        return QuestionRepository_1.questionRepository.findById(id);
    };
    QuestionService.prototype.deleteById = function (id) {
        return QuestionRepository_1.questionRepository.deleteById(id);
    };
    QuestionService.prototype.updateById = function (id, updateQuestion) {
        return QuestionRepository_1.questionRepository.updateById(id, updateQuestion);
    };
    return QuestionService;
}());
exports.questionService = Object.freeze(new QuestionService());
//# sourceMappingURL=QuestionService.js.map