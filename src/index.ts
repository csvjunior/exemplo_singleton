import { DatabaseSingleton } from "./databaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance(); // aqui seria o lugar do famoso "NEW"
db.executarQuery("SELECT * FROM tblCliente");

let db2: DatabaseSingleton;
db2 = DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");