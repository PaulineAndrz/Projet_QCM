"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var routing_1 = require("./routing");
var body_parser_1 = __importDefault(require("body-parser"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
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
db.on('error', console.error.bind(console, 'console.error'));
db.once('open', function () { return console.log("Mongo a bien demarré"); });
server.use(body_parser_1.default.json());
server.use("/", function (req, res, next) {
    var event = new Date(Date.now());
    var url = req.url, method = req.method;
    var timeReq = event.toString();
    var chemin = path_1.join(__dirname, "..", "assets", "log.txt");
    fs_1.default.appendFile(chemin, "Requ\u00EAte : " + url + " - Heure requ\u00EAte : " + timeReq + " - M\u00E9thode : " + method + "\n", (function () { }));
    next();
});
// server.use("/question", (req, res, next) => {
//     const event = new Date(Date.now());
//     const {url, method} = req;
//     const timeReq = event.toString();
//     const chemin = join(__dirname, "..", "assets", "log.txt");
//     fs.appendFile(chemin, `Requête : ${url} - Heure requête : ${timeReq} - Méthode : ${method}\n`, (() => {}));
//     next();
// })
routing_1.setRouting(server);
server.listen(333, function () { return console.log("Serveur lancé"); });
//# sourceMappingURL=index.js.map