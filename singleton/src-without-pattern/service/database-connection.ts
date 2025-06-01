export class DatabaseConnection {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
    this.connect();
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
