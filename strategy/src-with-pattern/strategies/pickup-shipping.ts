import { ShippingStrategy } from "./shipping-strategy";

export class PickupShipping implements ShippingStrategy {
  calculate(): number {
    return 0;
  }
}
