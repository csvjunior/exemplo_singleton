"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSingleton = void 0;
class DatabaseSingleton {
    //o construtor precisa estar disponível
    constructor() {
        //por enquanto não faz nada (aqui pode usar o sequelize para conexão com o banco)
        console.log("CONSTRUTOR - aqui eu crio a conexão com o banco...");
    }
    static getInstance() {
        if (!DatabaseSingleton.instace) { //ele está como undefined? Se sim:
            DatabaseSingleton.instace = new DatabaseSingleton();
        }
        return DatabaseSingleton.instace;
    }
    // métodos de negócio? Aquilo que o database pode fazer
    executarQuery(query) {
        console.log("DB>" + query);
    }
}
exports.DatabaseSingleton = DatabaseSingleton;
