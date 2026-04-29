import { ShippingCalculator } from "./services/shipping-calculator";
import { ExpressShipping } from "./strategies/express-shipping";
import { PickupShipping } from "./strategies/pickup-shipping";
import { StandardShipping } from "./strategies/standard-shipping";

const calculator = new ShippingCalculator(new StandardShipping());

console.log(`Frete comum: R$ ${calculator.calculate(12)}`);

calculator.setStrategy(new ExpressShipping());
console.log(`Frete expresso: R$ ${calculator.calculate(12)}`);

calculator.setStrategy(new PickupShipping());
console.log(`Retirada: R$ ${calculator.calculate(12)}`);

/*
- Cada tipo de frete fica em uma estrategia propria
- A calculadora usa uma interface comum
- O algoritmo pode ser trocado em tempo de execucao
*/
