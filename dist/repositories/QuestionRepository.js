"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRepository = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var questionSchema = new mongoose_1.default.Schema({
    question: String,
    answers: [{
            libelle: String,
            validation: Boolean,
        }]
}, { versionKey: false });
var questionModel = mongoose_1.default.model('questions', questionSchema);
var QuestionRepository = /** @class */ (function () {
    function QuestionRepository() {
    }
    QuestionRepository.prototype.findAll = function () {
        return questionModel.find().exec();
    };
    QuestionRepository.prototype.create = function (question) {
        return new questionModel(question).save();
    };
    QuestionRepository.prototype.findById = function (id) {
        return questionModel.findById(id).exec();
    };
    QuestionRepository.prototype.deleteById = function (id) {
        return questionModel.findByIdAndDelete(id).exec();
    };
    QuestionRepository.prototype.updateById = function (id, updateQuestion) {
        return questionModel.findByIdAndUpdate(id, { "question": updateQuestion }).exec();
    };
    return QuestionRepository;
}());
exports.questionRepository = Object.freeze(new QuestionRepository());
//# sourceMappingURL=QuestionRepository.js.map