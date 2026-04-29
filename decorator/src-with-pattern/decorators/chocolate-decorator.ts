import { Drink } from "../services/drink";

export class ChocolateDecorator implements Drink {
  constructor(private drink: Drink) {}

  getDescription(): string {
    return `${this.drink.getDescription()}, chocolate`;
  }

  getPrice(): number {
    return this.drink.getPrice() + 3;
  }
}
