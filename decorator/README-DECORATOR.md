# Decorator (Decorador)

> (Padrão Estrutural)

### 😠 Problema

Imagine que você tem um objeto simples, como um café, e quer adicionar novas responsabilidades a ele: leite, chocolate, chantilly, desconto, taxa extra e assim por diante.

Uma solução comum é colocar várias condicionais dentro da classe original ou criar muitas subclasses para cada combinação. Isso cresce rápido e deixa o código difícil de manter.

### 😁 Solução

O Decorator envolve um objeto com outro objeto que possui a mesma interface.

Cada decorator adiciona um comportamento específico e repassa o restante para o objeto original. Dessa forma, você consegue combinar comportamentos em tempo de execução sem modificar a classe base.

### 🤔 Analogia com o mundo real

Pense em uma roupa. Você pode usar uma camiseta e depois adicionar uma jaqueta, um cachecol ou um casaco. Cada camada adiciona algo novo, mas a pessoa continua sendo a mesma.

### 📝 Exemplo

Nesse diretório, você encontrará um exemplo de implementação do padrão Decorator no diretório **src-with-pattern** e outro exemplo sem a utilização do padrão no diretório **src-without-pattern**.

O exemplo usa um café simples e adiciona leite e chocolate como decorators.

#### Vantagens & Desvantagens

| Prós                                                                                         | Contras                                                                                         |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Adiciona responsabilidades sem alterar a classe original.                                     | Muitas camadas de decorators podem dificultar a leitura do fluxo.                                |
| Permite combinar comportamentos de forma flexível em tempo de execução.                       | Pode ser mais complexo do que uma solução direta quando existem poucas variações.                 |
| Evita explosão de subclasses para representar combinações de comportamentos.                   | A ordem dos decorators pode importar em alguns cenários e precisa ser bem entendida.              |

### Minha Opinião

É muito bom quando você tem comportamentos opcionais e combináveis. Só precisa ser usado com cuidado para não transformar uma criação simples em uma cadeia difícil de ler.
