# Factory (Fábrica)

🇺🇸 [Read in English](./README-FACTORY.md)

> (Padrão Criacional)

### 😠 Problema

Imagine que você precisa criar objetos diferentes dependendo de uma decisão do sistema. Por exemplo: enviar uma notificação por e-mail, SMS ou outro canal.

Se essa decisão fica espalhada pelo código, vários lugares passam a ter condicionais e instanciar classes diretamente. Quando um novo tipo surge, você precisa alterar muitos pontos do sistema.

### 😁 Solução

O Factory centraliza a criação dos objetos em um método ou classe especializada.

Em vez do cliente decidir diretamente qual classe instanciar, ele pede para a factory criar o objeto correto. Assim, a lógica de criação fica em um ponto claro e mais fácil de manter.

### 🤔 Analogia com o mundo real

Pense em uma pizzaria. Você pede uma pizza de calabresa, portuguesa ou marguerita, mas não monta a pizza manualmente. A cozinha sabe quais ingredientes usar e entrega o produto pronto.

### 📝 Exemplo

Nesse diretório, você encontrará um exemplo de implementação do padrão Factory no diretório **src-with-pattern** e outro exemplo sem a utilização do padrão no diretório **src-without-pattern**.

O exemplo usa uma factory para criar notificadores de e-mail e SMS.

#### Vantagens & Desvantagens

| Prós | Contras |
| ---- | ------- |
| Centraliza a criação de objetos e evita lógica de decisão espalhada. | Pode adicionar uma camada extra em casos onde a criação é simples demais. |
| Facilita adicionar novos tipos de objetos com menos impacto no código cliente. | A factory pode crescer demais se passar a concentrar muitas regras diferentes. |
| Ajuda o cliente a depender de abstrações em vez de classes concretas. | Ainda é preciso alterar a factory quando um novo tipo é incluído, dependendo da abordagem escolhida. |

### Minha Opinião

É um dos padrões mais fáceis de aplicar no dia a dia. Vale muito quando a criação de objetos começa a ter regras, tipos diferentes ou condicionais repetidas.
