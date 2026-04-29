import { Drink } from "../services/drink";

export class MilkDecorator implements Drink {
  constructor(private drink: Drink) {}

  getDescription(): string {
    return `${this.drink.getDescription()}, leite`;
  }

  getPrice(): number {
    return this.drink.getPrice() + 2;
  }
}
