"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseSingleton_1 = require("./databaseSingleton");
let db;
db = databaseSingleton_1.DatabaseSingleton.getInstance(); // aqui seria o lugar do famoso "NEW"
db.executarQuery("SELECT * FROM tblCliente");
let db2;
db2 = databaseSingleton_1.DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");
