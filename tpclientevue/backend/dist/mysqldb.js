"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexionMysql = void 0;
const mysql_1 = require("mysql");
exports.conexionMysql = mysql_1.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'instrumentosdb',
    connectionLimit: 100 //100 es el valor por defecto
});
