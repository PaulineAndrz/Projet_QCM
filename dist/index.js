"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var routing_1 = require("./routing");
var body_parser_1 = __importDefault(require("body-parser"));
var server = express_1.default();
mongoose_1.default.connect("mongodb://localhost:8085/qcm", {
    poolSize: 10,
    authSource: "admin",
    user: "root",
    pass: "example",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose_1.default.connection;
var logger = require('./middleware/logger.js');
var app = express_1.default();
app.use(logger.requestLog);
db.on('error', console.error.bind(console, 'console.error'));
db.once('open', function () { return console.log("Mongo a bien demarré"); });
server.use(body_parser_1.default.json());
routing_1.setRouting(server);
server.listen(333, function () { return console.log("Serveur lancé"); });
//# sourceMappingURL=index.js.map