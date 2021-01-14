import express from 'express'
import mongoose from 'mongoose';
import { questController} from './controllers/QuestController';
import { setRouting } from './routing';
import  bodyParser  from 'body-parser';
import fs from 'fs';
import { join } from 'path';

const server = express();
mongoose.connect("mongodb://localhost:8085/qcm", {
    poolSize: 10,
    authSource: "admin",
    user: "root",
    pass: "example",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'console.error'))
db.once('open', () => console.log("Mongo a bien demarré"));

server.use(bodyParser.json());

function timeConverter(UNIX_timestamp: any){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

server.all("/", (req, res, next) => {
    console.log('requête: '+req.method);
    const {url, method} = req;
    const timeReq = timeConverter(Date.now());
    const chemin = join(__dirname, "..", "assets", "log.txt");
    fs.appendFile(chemin, `Requête : ${url} - Heure requête : ${timeReq} - Méthode : ${method}\n`, (() => {}));
    next();
})

server.all("/question", (req, res, next) => {
    console.log('requête: '+req.method);
    const {url, method} = req;
    const timeReq = timeConverter(Date.now());
    const chemin = join(__dirname, "..", "assets", "log.txt");
    fs.appendFile(chemin, `Requête : ${url} - Heure requête : ${timeReq} - Méthode : ${method}\n`, (() => {}));
    next();
})

setRouting(server);

server.listen(333, () => console.log("Serveur lancé"));