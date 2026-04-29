import { Coffee } from "./services/coffee";

const coffee = new Coffee(true, true);

console.log(coffee.getDescription());
console.log(`R$ ${coffee.getPrice()}`);

/*
- Cada novo adicional tende a criar mais parametros e condicionais
- A classe Coffee precisa mudar sempre que surge uma nova combinacao
- O objeto original acumula responsabilidades que nao pertencem a ele
*/
