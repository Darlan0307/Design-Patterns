export interface ShippingStrategy {
  calculate(distanceInKm: number): number;
}
