import { ShippingStrategy } from "./shipping-strategy";

export class ExpressShipping implements ShippingStrategy {
  calculate(distanceInKm: number): number {
    return 20 + distanceInKm * 2;
  }
}
