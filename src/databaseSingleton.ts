export class DatabaseSingleton {
    
    // métodos para controlar a instância do singleton (que independem de ter ou não um objeto instaciado)
    private static instace: DatabaseSingleton;

    //o construtor precisa estar disponível
    private constructor() {
        //por enquanto não faz nada (aqui pode usar o sequelize para conexão com o banco)
        console.log("CONSTRUTOR - aqui eu crio a conexão com o banco...");
    }

    public static getInstance(): DatabaseSingleton {
        if (!DatabaseSingleton.instace) {              //ele está como undefined? Se sim:
            DatabaseSingleton.instace = new DatabaseSingleton();
        }
        return DatabaseSingleton.instace;
    }

    // métodos de negócio? Aquilo que o database pode fazer
    public executarQuery(query: string): void {
        console.log("DB>" + query);
    }
}