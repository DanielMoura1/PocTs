import express from "express";
import { Votar, pegar, CriarTime, DeletarTime } from "./controller/controller.js";
import cors from 'cors';
var server = express();
server.use(express.json());
server.use(cors());
server.post("/votar", Votar);
server.get("/votar", pegar);
server.post("/criar", CriarTime);
server["delete"]("/delete", DeletarTime);
server.listen(4000, function () {
    console.log('Servidor online');
});
