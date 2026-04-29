import { ShippingCalculator } from "./services/shipping-calculator";

const calculator = new ShippingCalculator();

console.log(`Frete comum: R$ ${calculator.calculate("standard", 12)}`);
console.log(`Frete expresso: R$ ${calculator.calculate("express", 12)}`);
console.log(`Retirada: R$ ${calculator.calculate("pickup", 12)}`);

/*
- A classe concentra varios algoritmos diferentes
- Cada novo tipo de frete exige alterar o mesmo metodo
- O cliente passa um tipo, mas quem decide o algoritmo ainda e a calculadora
*/
