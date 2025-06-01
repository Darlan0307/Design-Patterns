export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionString: string;

  private constructor(connectionString: string) {
    this.connectionString = connectionString;
    this.connect();
  }

  public static getInstance(connectionString: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(connectionString);
    }
    return DatabaseConnection.instance;
  }

  private connect(): void {
    console.log(`Conectando ao banco de dados: ${this.connectionString}`);
    // Lógica de conexão ao banco de dados
  }

  public query(sql: string): void {
    console.log(`Executando query: ${sql}`);
    // Lógica de execução de query
  }
}
