export class Coffee {
  constructor(
    private withMilk = false,
    private withChocolate = false
  ) {}

  getDescription(): string {
    let description = "Cafe simples";

    if (this.withMilk) {
      description += ", leite";
    }

    if (this.withChocolate) {
      description += ", chocolate";
    }

    return description;
  }

  getPrice(): number {
    let price = 5;

    if (this.withMilk) {
      price += 2;
    }

    if (this.withChocolate) {
      price += 3;
    }

    return price;
  }
}
