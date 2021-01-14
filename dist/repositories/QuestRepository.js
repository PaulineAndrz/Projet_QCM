"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questRepository = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var questSchema = new mongoose_1.default.Schema({
    question: String,
    answers: [{
            libelle: String,
            resp: Boolean,
        }]
}, { versionKey: false });
var questModel = mongoose_1.default.model('questions', questSchema);
var QuestRepository = /** @class */ (function () {
    function QuestRepository() {
    }
    QuestRepository.prototype.findAll = function () {
        return questModel.find().exec();
    };
    QuestRepository.prototype.create = function (quest) {
        return new questModel(quest).save();
    };
    QuestRepository.prototype.findById = function (id) {
        return questModel.findById(id).exec();
    };
    QuestRepository.prototype.deleteById = function (id) {
        return questModel.findByIdAndDelete(id).exec();
    };
    QuestRepository.prototype.updateById = function (id, update) {
        return questModel.findByIdAndUpdate(id, update).exec();
    };
    return QuestRepository;
}());
exports.questRepository = Object.freeze(new QuestRepository);
//# sourceMappingURL=QuestRepository.js.map