# Singleton (Carta Única)

🇺🇸 [Read in English](./README-SINGLETON.md)

> (Padrão Criacional)

### 😠 Problema

Digamos que você queira garantir que uma classe tenha apenas uma única instância e fornece um ponto de acesso global para aquela instância. Por que alguém iria querer controlar quantas instâncias uma classe tem? A razão mais comum para isso é para controlar o acesso a algum recurso compartilhado.

> Por exemplo, uma base de dados ou um sistema de cache

### 😁 Solução

Todas as implementações do Singleton têm esses dois passos em comum:

- Fazer o construtor padrão privado, para prevenir que outros objetos usem o operador new com a classe singleton.
- Criar um método estático de criação que age como um construtor. Esse método chama o construtor privado por debaixo dos panos para criar um objeto e o salva em um campo estático. Todas as chamadas seguintes para esse método retornam o objeto em cache.

### 🤔 Analogia com o mundo real

O governo é um excelente exemplo de um padrão Singleton. Um país pode ter apenas um governo oficial. Independentemente das identidades pessoais dos indivíduos que formam governos, o título, “O Governo de X”, é um ponto de acesso global que identifica o grupo de pessoas no comando.

### 📝 Exemplo

Nesse diretório, você encontrará um exemplo de implementação do padrão Singleton no diretório **src-with-pattern** e outro exemplo sem a utilização do padrão no diretório **src-without-pattern**.

#### Vantagens & Desvantagens

| Prós | Contras |
| ---- | ------- |
| Você pode ter certeza que uma classe só terá uma única instância. | Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez. |
| Você ganha um ponto de acesso global para aquela instância. | O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes. |
| O objeto singleton é inicializado somente quando for pedido pela primeira vez. | Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados. Já que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagens, você terá que pensar em uma maneira criativa de simular o singleton. Ou apenas não escreva os testes. Ou não use o padrão Singleton. |

### Minha Opinião

Para quem trabalha com projetos legados é comum ter contato ou precisar usar o padrão Singleton. Hoje em dia muitos frameworks modernos já fornecem soluções melhores para recursos compartilhados, como injeção de dependência e containers de serviço. Por isso, eu usaria Singleton com cautela, principalmente porque ele pode criar estado global difícil de testar e controlar.
