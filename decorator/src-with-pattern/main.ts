import { ChocolateDecorator } from "./decorators/chocolate-decorator";
import { MilkDecorator } from "./decorators/milk-decorator";
import { Coffee } from "./services/coffee";

const coffee = new ChocolateDecorator(new MilkDecorator(new Coffee()));

console.log(coffee.getDescription());
console.log(`R$ ${coffee.getPrice()}`);

/*
- Todos os objetos seguem a mesma interface
- Cada decorator adiciona uma pequena responsabilidade
- O cafe original nao precisa mudar para receber novos adicionais
*/
