export type Language = "en" | "pt";
export type Category = "creational" | "structural" | "behavioral";

export type TextBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type PatternContent = {
  name: string;
  category: Category;
  summary: string;
  problem: TextBlock[];
  solution: TextBlock[];
  analogy: TextBlock[];
  whenToUse: TextBlock[];
  pros: string[];
  cons: string[];
  opinion: TextBlock[];
};

export type Pattern = {
  id: string;
  accent: "moss" | "clay" | "ocean";
  content: Record<Language, PatternContent>;
};

const p = (text: string): TextBlock => ({ type: "paragraph", text });
const quote = (text: string): TextBlock => ({ type: "quote", text });
const list = (items: string[]): TextBlock => ({ type: "list", items });

export const categoryLabels: Record<Language, Record<Category, string>> = {
  en: {
    creational: "Creational",
    structural: "Structural",
    behavioral: "Behavioral",
  },
  pt: {
    creational: "Criacionais",
    structural: "Estruturais",
    behavioral: "Comportamentais",
  },
};

export const patterns: Pattern[] = [
  {
    id: "singleton",
    accent: "moss",
    content: {
      en: {
        name: "Singleton",
        category: "creational",
        summary:
          "Ensures that a class has only one instance and provides a global access point to it.",
        problem: [
          p(
            "Suppose you want to ensure that a class has only one instance and provides a global access point to that instance. Why would someone want to control how many instances a class has? The most common reason is to control access to a shared resource.",
          ),
          quote("For example, a database connection or a cache system"),
        ],
        solution: [
          p("All Singleton implementations have these two steps in common:"),
          list([
            "Make the default constructor private to prevent other objects from using the `new` operator with the singleton class.",
            "Create a static creation method that acts as a constructor. This method calls the private constructor under the hood to create an object and stores it in a static field. All following calls to this method return the cached object.",
          ]),
        ],
        analogy: [
          p(
            'The government is a good example of the Singleton pattern. A country can have only one official government. Regardless of the personal identities of the individuals who form governments, the title "The Government of X" is a global access point that identifies the group of people in command.',
          ),
        ],
        whenToUse: [
          p(
            "Use it when it makes sense to have a single shared instance, such as a connection pool, global configuration, or cache. Use it carefully because of global state.",
          ),
        ],
        pros: [
          "You can be sure that a class has only one instance.",
          "You get a global access point to that instance.",
          "The singleton object is initialized only when it is requested for the first time.",
        ],
        cons: [
          "Violates the single responsibility principle. The pattern solves two problems at once.",
          "The pattern requires special treatment in a multithreaded environment so multiple threads cannot create the singleton object more than once.",
          "It can be hard to unit test client code that uses Singleton because many testing frameworks rely on inheritance to produce mock objects.",
        ],
        opinion: [
          p(
            "For people working with legacy projects, it is common to find or need to use the Singleton pattern. Nowadays, many modern frameworks already provide better solutions for shared resources, such as dependency injection and service containers. Because of that, I would use Singleton carefully, mainly because it can create global state that is hard to test and control.",
          ),
        ],
      },
      pt: {
        name: "Singleton",
        category: "creational",
        summary:
          "Garante que uma classe tenha apenas uma única instância e oferece um ponto global de acesso a ela.",
        problem: [
          p(
            "Digamos que você queira garantir que uma classe tenha apenas uma única instância e fornece um ponto de acesso global para aquela instância. Por que alguém iria querer controlar quantas instâncias uma classe tem? A razão mais comum para isso é para controlar o acesso a algum recurso compartilhado.",
          ),
          quote("Por exemplo, uma base de dados ou um sistema de cache"),
        ],
        solution: [
          p("Todas as implementações do Singleton têm esses dois passos em comum:"),
          list([
            "Fazer o construtor padrão privado, para prevenir que outros objetos usem o operador `new` com a classe singleton.",
            "Criar um método estático de criação que age como um construtor. Esse método chama o construtor privado por debaixo dos panos para criar um objeto e o salva em um campo estático. Todas as chamadas seguintes para esse método retornam o objeto em cache.",
          ]),
        ],
        analogy: [
          p(
            "O governo é um excelente exemplo de um padrão Singleton. Um país pode ter apenas um governo oficial. Independentemente das identidades pessoais dos indivíduos que formam governos, o título, “O Governo de X”, é um ponto de acesso global que identifica o grupo de pessoas no comando.",
          ),
        ],
        whenToUse: [
          p(
            "Use quando faz sentido ter uma única instância compartilhada, como pool de conexão, configuração global ou cache. Use com cautela por causa de estado global.",
          ),
        ],
        pros: [
          "Você pode ter certeza que uma classe só terá uma única instância.",
          "Você ganha um ponto de acesso global para aquela instância.",
          "O objeto singleton é inicializado somente quando for pedido pela primeira vez.",
        ],
        cons: [
          "Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.",
          "O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes.",
          "Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados.",
        ],
        opinion: [
          p(
            "Para quem trabalha com projetos legados é comum ter contato ou precisar usar o padrão Singleton. Hoje em dia muitos frameworks modernos já fornecem soluções melhores para recursos compartilhados, como injeção de dependência e containers de serviço. Por isso, eu usaria Singleton com cautela, principalmente porque ele pode criar estado global difícil de testar e controlar.",
          ),
        ],
      },
    },
  },
  {
    id: "factory",
    accent: "clay",
    content: {
      en: {
        name: "Factory",
        category: "creational",
        summary:
          "Centralizes object creation in a specialized method or class.",
        problem: [
          p(
            "Imagine you need to create different objects depending on a system decision. For example: sending a notification by email, SMS, or another channel.",
          ),
          p(
            "If this decision is spread across the code, several places start to have conditionals and instantiate classes directly. When a new type appears, you need to change many parts of the system.",
          ),
        ],
        solution: [
          p("Factory centralizes object creation in a specialized method or class."),
          p(
            "Instead of the client deciding directly which class to instantiate, it asks the factory to create the correct object. This keeps creation logic in a clear place that is easier to maintain.",
          ),
        ],
        analogy: [
          p(
            "Think about a pizza shop. You order pepperoni, Portuguese, or margherita pizza, but you do not assemble it manually. The kitchen knows which ingredients to use and delivers the final product.",
          ),
        ],
        whenToUse: [
          p(
            "Use it when object creation starts to become complex, such as in APIs, frameworks, integrations, or objects with construction rules.",
          ),
        ],
        pros: [
          "Centralizes object creation and avoids scattered decision logic.",
          "Makes it easier to add new object types with less impact on client code.",
          "Helps the client depend on abstractions instead of concrete classes.",
        ],
        cons: [
          "Can add an extra layer in cases where creation is too simple.",
          "The factory can grow too much if it starts concentrating many different rules.",
          "Depending on the chosen approach, the factory still needs to change when a new type is added.",
        ],
        opinion: [
          p(
            "It is one of the easiest patterns to apply in daily work. It is very useful when object creation starts to have rules, different types, or repeated conditionals.",
          ),
        ],
      },
      pt: {
        name: "Factory",
        category: "creational",
        summary:
          "Centraliza a criação dos objetos em um método ou classe especializada.",
        problem: [
          p(
            "Imagine que você precisa criar objetos diferentes dependendo de uma decisão do sistema. Por exemplo: enviar uma notificação por e-mail, SMS ou outro canal.",
          ),
          p(
            "Se essa decisão fica espalhada pelo código, vários lugares passam a ter condicionais e instanciar classes diretamente. Quando um novo tipo surge, você precisa alterar muitos pontos do sistema.",
          ),
        ],
        solution: [
          p("O Factory centraliza a criação dos objetos em um método ou classe especializada."),
          p(
            "Em vez do cliente decidir diretamente qual classe instanciar, ele pede para a factory criar o objeto correto. Assim, a lógica de criação fica em um ponto claro e mais fácil de manter.",
          ),
        ],
        analogy: [
          p(
            "Pense em uma pizzaria. Você pede uma pizza de calabresa, portuguesa ou marguerita, mas não monta a pizza manualmente. A cozinha sabe quais ingredientes usar e entrega o produto pronto.",
          ),
        ],
        whenToUse: [
          p(
            "Use quando a criação de objetos começa a ficar complexa, como em APIs, frameworks, integrações ou objetos com regras de construção.",
          ),
        ],
        pros: [
          "Centraliza a criação de objetos e evita lógica de decisão espalhada.",
          "Facilita adicionar novos tipos de objetos com menos impacto no código cliente.",
          "Ajuda o cliente a depender de abstrações em vez de classes concretas.",
        ],
        cons: [
          "Pode adicionar uma camada extra em casos onde a criação é simples demais.",
          "A factory pode crescer demais se passar a concentrar muitas regras diferentes.",
          "Ainda é preciso alterar a factory quando um novo tipo é incluído, dependendo da abordagem escolhida.",
        ],
        opinion: [
          p(
            "É um dos padrões mais fáceis de aplicar no dia a dia. Vale muito quando a criação de objetos começa a ter regras, tipos diferentes ou condicionais repetidas.",
          ),
        ],
      },
    },
  },
  {
    id: "adapter",
    accent: "ocean",
    content: {
      en: {
        name: "Adapter",
        category: "structural",
        summary:
          "Connects incompatible interfaces through a translation layer.",
        problem: [
          list([
            "You need to integrate an existing class that is not compatible with the design used by your code.",
            "You want to reuse several subclasses that do not share some common functionality and cannot add that functionality to the superclass.",
            "You need to integrate third-party libraries or components without modifying their original source code.",
          ]),
        ],
        solution: [
          p(
            "Adapter wraps an object from one class, called the adaptee, and exposes an interface expected by clients. The Adapter translates method calls from the expected interface into calls that are compatible with the original object.",
          ),
        ],
        analogy: [
          p(
            "When you travel from Brazil to Europe for the first time, you may be surprised when trying to charge your laptop. Plugs and outlet standards are different across countries. That is why a Brazilian plug will not fit into a German outlet. The problem can be solved with a plug adapter that has the Brazilian outlet style and the European plug style.",
          ),
        ],
        whenToUse: [
          p(
            "Use it when you need to connect incompatible interfaces, such as external APIs, legacy systems, or library migrations.",
          ),
        ],
        pros: [
          "Single responsibility principle. You can separate interface or data conversion from the main business logic of the program.",
          "Open/closed principle. You can introduce new types of adapters without breaking existing client code, as long as clients work through the expected interface.",
        ],
        cons: [
          "The overall code complexity increases because you need to introduce a new set of interfaces and classes. Sometimes it is simpler to change the service class so it fits the rest of your code.",
        ],
        opinion: [
          p(
            "It is a very common pattern when working with external libraries, third-party APIs, or legacy systems. It helps protect the rest of the code from the changes and details of those integrations.",
          ),
        ],
      },
      pt: {
        name: "Adapter",
        category: "structural",
        summary:
          "Conecta interfaces incompatíveis através de uma camada de tradução.",
        problem: [
          list([
            "Você precisa integrar uma classe existente que não é compatível com o padrão de projeto que você está usando.",
            "Você quer reutilizar várias subclasses que não possuem algumas funcionalidades comuns e não é possível adicionar essas funcionalidades à superclasse.",
            "Você precisa integrar bibliotecas ou componentes de terceiros sem modificar o código fonte original.",
          ]),
        ],
        solution: [
          p(
            "O Adapter encapsula um objeto de uma classe (o adaptado) e expõe uma interface que é esperada pelos clientes. O Adapter traduz as chamadas de método da interface esperada para chamadas compatíveis com o objeto original.",
          ),
        ],
        analogy: [
          p(
            "Quando você viaja do Brasil para a Europa pela primeira vez, você pode ter uma pequena surpresa quando tenta carregar seu laptop. O plugue e os padrões de tomadas são diferentes em diferentes países. É por isso que seu plugue do Brasil não vai caber em uma tomada da Alemanha. O problema pode ser resolvido usando um adaptador de tomada que tenha o estilo de tomada Brasileira e o plugue no estilo Europeu.",
          ),
        ],
        whenToUse: [
          p(
            "Use quando você precisa conectar interfaces incompatíveis, como APIs externas, sistemas legados ou migração de bibliotecas.",
          ),
        ],
        pros: [
          "Princípio de responsabilidade única. Você pode separar a conversão de interface ou de dados da lógica primária do negócio do programa.",
          "Princípio aberto/fechado. Você pode introduzir novos tipos de adaptadores no programa sem quebrar o código cliente existente, desde que eles trabalhem com os adaptadores através da interface cliente.",
        ],
        cons: [
          "A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Algumas vezes é mais simples mudar a classe serviço para que ela se adeque com o resto do seu código.",
        ],
        opinion: [
          p(
            "É um padrão muito comum quando trabalhamos com bibliotecas externas, APIs de terceiros ou sistemas legados. Ele ajuda a proteger o restante do código das mudanças e detalhes dessas integrações.",
          ),
        ],
      },
    },
  },
  {
    id: "decorator",
    accent: "moss",
    content: {
      en: {
        name: "Decorator",
        category: "structural",
        summary:
          "Adds responsibilities to an object dynamically by wrapping it with objects that share the same interface.",
        problem: [
          p(
            "Imagine you have a simple object, such as a coffee, and you want to add new responsibilities to it: milk, chocolate, whipped cream, discount, extra fee, and so on.",
          ),
          p(
            "A common solution is to put several conditionals inside the original class or create many subclasses for each combination. This grows quickly and makes the code hard to maintain.",
          ),
        ],
        solution: [
          p("Decorator wraps an object with another object that has the same interface."),
          p(
            "Each decorator adds a specific behavior and forwards the rest to the original object. This lets you combine behaviors at runtime without modifying the base class.",
          ),
        ],
        analogy: [
          p(
            "Think about clothing. You can wear a T-shirt and then add a jacket, a scarf, or a coat. Each layer adds something new, but the person remains the same.",
          ),
        ],
        whenToUse: [
          p(
            "Use it when you want to add behavior without changing the original object, such as in middlewares, interceptors, logs, validations, or optional extensions.",
          ),
        ],
        pros: [
          "Adds responsibilities without changing the original class.",
          "Allows behaviors to be combined flexibly at runtime.",
          "Avoids a subclass explosion to represent behavior combinations.",
        ],
        cons: [
          "Too many decorator layers can make the flow harder to read.",
          "It can be more complex than a direct solution when there are only a few variations.",
          "The order of decorators can matter in some scenarios and must be well understood.",
        ],
        opinion: [
          p(
            "It is very useful when you have optional and combinable behaviors. It just needs to be used carefully so a simple object creation does not become a chain that is hard to read.",
          ),
        ],
      },
      pt: {
        name: "Decorator",
        category: "structural",
        summary:
          "Adiciona responsabilidades a um objeto dinamicamente.",
        problem: [
          p(
            "Imagine que você tem um objeto simples, como um café, e quer adicionar novas responsabilidades a ele: leite, chocolate, chantilly, desconto, taxa extra e assim por diante.",
          ),
          p(
            "Uma solução comum é colocar várias condicionais dentro da classe original ou criar muitas subclasses para cada combinação. Isso cresce rápido e deixa o código difícil de manter.",
          ),
        ],
        solution: [
          p("O Decorator envolve um objeto com outro objeto que possui a mesma interface."),
          p(
            "Cada decorator adiciona um comportamento específico e repassa o restante para o objeto original. Dessa forma, você consegue combinar comportamentos em tempo de execução sem modificar a classe base.",
          ),
        ],
        analogy: [
          p(
            "Pense em uma roupa. Você pode usar uma camiseta e depois adicionar uma jaqueta, um cachecol ou um casaco. Cada camada adiciona algo novo, mas a pessoa continua sendo a mesma.",
          ),
        ],
        whenToUse: [
          p(
            "Use quando você quer adicionar comportamento sem alterar o objeto original, como em middlewares, interceptors, logs, validações ou extensões opcionais.",
          ),
        ],
        pros: [
          "Adiciona responsabilidades sem alterar a classe original.",
          "Permite combinar comportamentos de forma flexível em tempo de execução.",
          "Evita explosão de subclasses para representar combinações de comportamentos.",
        ],
        cons: [
          "Muitas camadas de decorators podem dificultar a leitura do fluxo.",
          "Pode ser mais complexo do que uma solução direta quando existem poucas variações.",
          "A ordem dos decorators pode importar em alguns cenários e precisa ser bem entendida.",
        ],
        opinion: [
          p(
            "É muito bom quando você tem comportamentos opcionais e combináveis. Só precisa ser usado com cuidado para não transformar uma criação simples em uma cadeia difícil de ler.",
          ),
        ],
      },
    },
  },
  {
    id: "observer",
    accent: "ocean",
    content: {
      en: {
        name: "Observer",
        category: "behavioral",
        summary:
          "Automatically notifies observers when an object changes.",
        problem: [
          p(
            "Imagine you have an important object in the system, such as an order, and several parts need to know when its status changes: email, SMS, push notifications, logs, admin dashboards, and so on.",
          ),
          p(
            "Without care, the main class starts to know all these services directly. Every new notification channel requires a change in that class, even when the main order rule has not changed.",
          ),
        ],
        solution: [
          p(
            "Observer creates a relationship between a central object, called the **subject**, and a list of interested objects, called **observers**.",
          ),
          p(
            "When the subject state changes, it automatically notifies all registered observers. This way, the subject does not need to know the details of each reaction.",
          ),
        ],
        analogy: [
          p(
            "Think about a video channel. When a new video is published, all subscribers receive a notification. The channel does not need to manually message each person; it publishes the content and the platform notifies whoever subscribed.",
          ),
        ],
        whenToUse: [
          p(
            "Use it when several parts of the system need to react to changes, such as events, webhooks, notifications, or state changes.",
          ),
        ],
        pros: [
          "Reduces coupling between the main object and the objects that react to changes.",
          "Makes it easier to add new reactions without changing the main class.",
          "Helps when several parts of the system need to react to the same event or state change.",
        ],
        cons: [
          "If there are many observers, it can become harder to understand notification order and impact.",
          "Automatic notifications can hide side effects if the flow is not well documented.",
          "In large systems, error handling may be needed so one observer does not break the others.",
        ],
        opinion: [
          p(
            "It is a very useful pattern for events, notifications, and flows where several points of the system need to react to a change. It is just important not to overuse it: if everything becomes an event, the system flow can become hard to follow.",
          ),
        ],
      },
      pt: {
        name: "Observer",
        category: "behavioral",
        summary:
          "Notifica automaticamente observadores quando um objeto muda.",
        problem: [
          p(
            "Imagine que você tem um objeto importante no sistema, como um pedido, e várias partes precisam saber quando ele muda de status: e-mail, SMS, push, log, painel administrativo e assim por diante.",
          ),
          p(
            "Sem cuidado, a classe principal começa a conhecer todos esses serviços diretamente. Cada novo canal de notificação exige uma alteração nela, mesmo que a regra principal do pedido não tenha mudado.",
          ),
        ],
        solution: [
          p(
            "O Observer cria uma relação entre um objeto central, chamado de **subject**, e uma lista de objetos interessados, chamados de **observers**.",
          ),
          p(
            "Quando o estado do subject muda, ele notifica automaticamente todos os observadores cadastrados. Assim, o subject não precisa conhecer os detalhes de cada reação.",
          ),
        ],
        analogy: [
          p(
            "Pense em um canal de vídeos. Quando um novo vídeo é publicado, todos os inscritos recebem uma notificação. O canal não precisa mandar uma mensagem manual para cada pessoa; ele apenas publica o conteúdo e a plataforma avisa quem está inscrito.",
          ),
        ],
        whenToUse: [
          p(
            "Use quando várias partes do sistema precisam reagir a mudanças, como eventos, webhooks, notificações ou mudanças de estado.",
          ),
        ],
        pros: [
          "Reduz o acoplamento entre o objeto principal e os objetos que reagem às mudanças.",
          "Facilita adicionar novas reações sem alterar a classe principal.",
          "Ajuda quando várias partes do sistema precisam reagir ao mesmo evento ou mudança de estado.",
        ],
        cons: [
          "Se existirem muitos observadores, pode ficar mais difícil entender a ordem e o impacto das notificações.",
          "Notificações automáticas podem esconder efeitos colaterais se o fluxo não estiver bem documentado.",
          "Em sistemas grandes, pode ser necessário controlar erros para que um observador não quebre os demais.",
        ],
        opinion: [
          p(
            "É um padrão muito útil para eventos, notificações e fluxos onde vários pontos do sistema precisam reagir a uma mudança. Só é importante evitar exageros: se tudo vira evento, o fluxo do sistema pode ficar difícil de acompanhar.",
          ),
        ],
      },
    },
  },
  {
    id: "strategy",
    accent: "clay",
    content: {
      en: {
        name: "Strategy",
        category: "behavioral",
        summary:
          "Swaps algorithms at runtime through a common interface.",
        problem: [
          p(
            "Imagine you have a rule that can be calculated in several ways, such as standard shipping, express shipping, or in-store pickup.",
          ),
          p(
            "Without a pattern, it is common to create a method full of conditionals. Each new algorithm grows that method and forces the main class to know all the details.",
          ),
        ],
        solution: [
          p(
            "Strategy defines a family of algorithms, puts each algorithm in a separate class, and makes all of them follow the same interface.",
          ),
          p(
            "The client uses the common interface and can swap the strategy at runtime without needing to know the details of the chosen implementation.",
          ),
        ],
        analogy: [
          p(
            "Think about a maps application. You can choose to go by car, walking, or by bike. The destination is the same, but the strategy to calculate the route changes.",
          ),
        ],
        whenToUse: [
          p(
            "Use it when you need to swap algorithms or rules at runtime, such as validation, sorting, authentication, shipping calculation, or discount rules.",
          ),
        ],
        pros: [
          "Removes large conditionals from classes that should only use the algorithm.",
          "Makes it easy to swap the algorithm at runtime.",
          "Helps add new algorithms without changing the class that uses the strategy.",
        ],
        cons: [
          "Can create several small classes, which may be overkill for very simple rules.",
          "The client needs to know which strategy to choose, or another part of the system must decide it.",
          "Very similar strategies can create duplication if they are not organized well.",
        ],
        opinion: [
          p(
            "It is one of the most useful patterns for business rules that change often. When you see many `if` or `switch` statements choosing algorithms, Strategy is usually a good option.",
          ),
        ],
      },
      pt: {
        name: "Strategy",
        category: "behavioral",
        summary:
          "Troca algoritmos em tempo de execução através de uma interface comum.",
        problem: [
          p(
            "Imagine que você tem uma regra que pode ser calculada de várias formas, como frete comum, frete expresso ou retirada na loja.",
          ),
          p(
            "Sem um padrão, é comum criar um método cheio de condicionais. Cada novo algoritmo aumenta esse método e obriga a classe principal a conhecer todos os detalhes.",
          ),
        ],
        solution: [
          p(
            "O Strategy define uma família de algoritmos, coloca cada algoritmo em uma classe separada e faz todos seguirem a mesma interface.",
          ),
          p(
            "O cliente usa a interface comum e pode trocar a estratégia em tempo de execução, sem precisar saber os detalhes da implementação escolhida.",
          ),
        ],
        analogy: [
          p(
            "Pense em um aplicativo de mapas. Você pode escolher ir de carro, a pé ou de bicicleta. O destino é o mesmo, mas a estratégia para calcular o caminho muda.",
          ),
        ],
        whenToUse: [
          p(
            "Use quando você precisa trocar algoritmos ou regras em tempo de execução, como validação, ordenação, autenticação, cálculo de frete ou regras de desconto.",
          ),
        ],
        pros: [
          "Remove condicionais grandes de classes que deveriam apenas usar o algoritmo.",
          "Facilita trocar o algoritmo em tempo de execução.",
          "Ajuda a adicionar novos algoritmos sem alterar a classe que usa a estratégia.",
        ],
        cons: [
          "Pode criar várias classes pequenas, o que pode ser exagero para regras muito simples.",
          "O cliente precisa saber qual estratégia escolher ou ter outro ponto do sistema para decidir isso.",
          "Estratégias muito parecidas podem gerar duplicação se não forem bem organizadas.",
        ],
        opinion: [
          p(
            "É um dos padrões mais úteis para regras de negócio que mudam bastante. Quando você vê muitos `if` ou `switch` escolhendo algoritmos, Strategy costuma ser uma boa opção.",
          ),
        ],
      },
    },
  },
];
