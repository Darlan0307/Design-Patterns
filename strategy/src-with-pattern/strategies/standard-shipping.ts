import { ShippingStrategy } from "./shipping-strategy";

export class StandardShipping implements ShippingStrategy {
  calculate(distanceInKm: number): number {
    return 10 + distanceInKm * 1.2;
  }
}
