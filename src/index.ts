import express from 'express'
import mongoose from 'mongoose';
import { questController} from './controllers/QuestController'
import { setRouting } from './routing';
import  bodyParser  from 'body-parser'

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

server.use(bodyParser.json())

setRouting(server);

server.listen(333, () => console.log("Serveur lancé"));