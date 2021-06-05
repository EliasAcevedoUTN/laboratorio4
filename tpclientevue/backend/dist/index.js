"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const routes_1 = __importDefault(require("./routes"));
app.use(express_1.default.json()); //para transformar los datos a objetos json
app.use(express_1.default.urlencoded({ extended: false })); //transformar los datos de un formulario html a objetos json 
app.use((req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(routes_1.default);
app.listen(4000, () => {
    console.log("Servidor en puerto 4000", 4000);
});
