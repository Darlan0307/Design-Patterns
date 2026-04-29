import { Drink } from "./drink";

export class Coffee implements Drink {
  getDescription(): string {
    return "Cafe simples";
  }

  getPrice(): number {
    return 5;
  }
}
