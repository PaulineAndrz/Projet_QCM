import express from 'express'
import mongoose from 'mongoose';
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

server.use("/", (req, res, next) => {
    const event = new Date(Date.now());
    const {url, method} = req;
    const timeReq = event.toString();
    const chemin = join(__dirname, "..", "assets", "log.txt");
    fs.appendFile(chemin, `Requête : ${url} - Heure requête : ${timeReq} - Méthode : ${method}\n`, (() => {}));
    next();
})

// server.use("/question", (req, res, next) => {
//     const event = new Date(Date.now());
//     const {url, method} = req;
//     const timeReq = event.toString();
//     const chemin = join(__dirname, "..", "assets", "log.txt");
//     fs.appendFile(chemin, `Requête : ${url} - Heure requête : ${timeReq} - Méthode : ${method}\n`, (() => {}));
//     next();
// })

setRouting(server);

server.listen(333, () => console.log("Serveur lancé"));