import { ShippingStrategy } from "../strategies/shipping-strategy";

export class ShippingCalculator {
  constructor(private strategy: ShippingStrategy) {}

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  calculate(distanceInKm: number): number {
    return this.strategy.calculate(distanceInKm);
  }
}
