import { DatabaseConnection } from "./service/database-connection";

const db1 = DatabaseConnection.getInstance(
  "mysql://user:password@localhost:3306/mydb"
); // Cria uma nova instância do objeto DatabaseConnection

db1.query("SELECT * FROM users");

const db2 = DatabaseConnection.getInstance(
  "mysql://user:password@localhost:3306/mydb"
); // Retorna a mesma instância do objeto DatabaseConnection

db2.query("SELECT * FROM users");
