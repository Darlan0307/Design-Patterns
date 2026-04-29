export type ShippingType = "standard" | "express" | "pickup";

export class ShippingCalculator {
  calculate(type: ShippingType, distanceInKm: number): number {
    if (type === "standard") {
      return 10 + distanceInKm * 1.2;
    }

    if (type === "express") {
      return 20 + distanceInKm * 2;
    }

    if (type === "pickup") {
      return 0;
    }

    throw new Error(`Tipo de frete nao suportado: ${type}`);
  }
}
