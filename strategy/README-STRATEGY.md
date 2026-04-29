# Strategy (Estratégia)

> (Padrão Comportamental)

### 😠 Problema

Imagine que você tem uma regra que pode ser calculada de várias formas, como frete comum, frete expresso ou retirada na loja.

Sem um padrão, é comum criar um método cheio de condicionais. Cada novo algoritmo aumenta esse método e obriga a classe principal a conhecer todos os detalhes.

### 😁 Solução

O Strategy define uma família de algoritmos, coloca cada algoritmo em uma classe separada e faz todos seguirem a mesma interface.

O cliente usa a interface comum e pode trocar a estratégia em tempo de execução, sem precisar saber os detalhes da implementação escolhida.

### 🤔 Analogia com o mundo real

Pense em um aplicativo de mapas. Você pode escolher ir de carro, a pé ou de bicicleta. O destino é o mesmo, mas a estratégia para calcular o caminho muda.

### 📝 Exemplo

Nesse diretório, você encontrará um exemplo de implementação do padrão Strategy no diretório **src-with-pattern** e outro exemplo sem a utilização do padrão no diretório **src-without-pattern**.

O exemplo usa uma calculadora de frete com estratégias para frete comum, expresso e retirada.

#### Vantagens & Desvantagens

| Prós                                                                                  | Contras                                                                                              |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Remove condicionais grandes de classes que deveriam apenas usar o algoritmo.           | Pode criar várias classes pequenas, o que pode ser exagero para regras muito simples.                 |
| Facilita trocar o algoritmo em tempo de execução.                                      | O cliente precisa saber qual estratégia escolher ou ter outro ponto do sistema para decidir isso.     |
| Ajuda a adicionar novos algoritmos sem alterar a classe que usa a estratégia.           | Estratégias muito parecidas podem gerar duplicação se não forem bem organizadas.                      |

### Minha Opinião

É um dos padrões mais úteis para regras de negócio que mudam bastante. Quando você vê muitos `if` ou `switch` escolhendo algoritmos, Strategy costuma ser uma boa opção.
