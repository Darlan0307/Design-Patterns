# Adapter (Adaptador)

> (Padrão Estrutural)

### 😠 Problema

- Você precisa integrar uma classe existente que não é compatível com o padrão de projeto que você está usando.
- Você quer reutilizar várias subclasses que não possuem algumas funcionalidades comuns e não é possível adicionar essas funcionalidades à superclasse.
- Você precisa integrar bibliotecas ou componentes de terceiros sem modificar o código fonte original.

### 😁 Solução

O Adapter encapsula um objeto de uma classe (o adaptado) e expõe uma interface que é esperada pelos clientes. O Adapter traduz as chamadas de método da interface esperada para chamadas compatíveis com o objeto original.

### 🤔 Analogia com o mundo real

Quando você viaja do Brasil para a Europa pela primeira vez, você pode ter uma pequena surpresa quando tenta carregar seu laptop. O plugue e os padrões de tomadas são diferentes em diferentes países. É por isso que seu plugue do Brasil não vai caber em uma tomada da Alemanha. O problema pode ser resolvido usando um adaptador de tomada que tenha o estilo de tomada Brasileira e o plugue no estilo Europeu.

### 📝 Exemplo

Nesse diretório, você encontrará um exemplo de implementação do padrão Adapter no diretório **src-with-pattern** e outro exemplo sem a utilização do padrão no diretório **src-without-pattern**.

#### Vantagens & Desvantagens

| Prós                                                                                                                                                                                                    | Contras                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Princípio de responsabilidade única. Você pode separar a conversão de interface ou de dados da lógica primária do negócio do programa.                                                                  | A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Algumas vezes é mais simples mudar a classe serviço para que ela se adeque com o resto do seu código. |
| Princípio aberto/fechado. Você pode introduzir novos tipos de adaptadores no programa sem quebrar o código cliente existente, desde que eles trabalhem com os adaptadores através da interface cliente. |                                                                                                                                                                                                                        |
