export type Language = "en" | "pt";
export type Category = "creational" | "structural" | "behavioral";

export type PatternContent = {
  name: string;
  category: Category;
  summary: string;
  problem: string[];
  solution: string[];
  analogy: string[];
  whenToUse: string;
  pros: string[];
  cons: string[];
};

export type CodeExample = {
  file: string;
  description: Record<Language, string>;
  code: string;
};

export type Pattern = {
  id: string;
  accent: "moss" | "clay" | "ocean";
  content: Record<Language, PatternContent>;
  code: {
    without: CodeExample;
    with: CodeExample;
  };
};

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
          "Suppose you want to ensure that a class has only one instance and provides a global access point to that instance.",
          "The most common reason is controlling access to a shared resource, such as a database connection or a cache system.",
        ],
        solution: [
          "Make the default constructor private to prevent other objects from using the `new` operator with the singleton class.",
          "Create a static creation method that acts as a constructor. It calls the private constructor under the hood, stores the object in a static field, and returns the cached object on the next calls.",
        ],
        analogy: [
          "The government is a good example of Singleton. A country can have only one official government.",
          'Regardless of the people who form governments, the title "The Government of X" is a global access point that identifies the group in command.',
        ],
        whenToUse:
          "Use it for a single shared instance such as a connection pool, global configuration, or cache. Use it carefully because it can create global state.",
        pros: [
          "You can be sure that a class has only one instance.",
          "You get a global access point to that instance.",
          "The singleton object is initialized only when it is requested for the first time.",
        ],
        cons: [
          "It can violate the single responsibility principle.",
          "It requires special treatment in multithreaded environments.",
          "It can make unit tests harder because static access and private constructors are difficult to mock.",
        ],
      },
      pt: {
        name: "Singleton",
        category: "creational",
        summary:
          "Garante que uma classe tenha apenas uma única instância e oferece um ponto global de acesso a ela.",
        problem: [
          "Digamos que você queira garantir que uma classe tenha apenas uma única instância e fornece um ponto de acesso global para aquela instância.",
          "A razão mais comum para controlar quantas instâncias uma classe tem é controlar o acesso a algum recurso compartilhado, como uma base de dados ou um sistema de cache.",
        ],
        solution: [
          "Fazer o construtor padrão privado, para prevenir que outros objetos usem o operador `new` com a classe singleton.",
          "Criar um método estático de criação que age como um construtor. Esse método chama o construtor privado por debaixo dos panos, salva o objeto em um campo estático e retorna o objeto em cache nas próximas chamadas.",
        ],
        analogy: [
          "O governo é um excelente exemplo de Singleton. Um país pode ter apenas um governo oficial.",
          "Independentemente das identidades pessoais dos indivíduos que formam governos, o título “O Governo de X” é um ponto de acesso global que identifica o grupo de pessoas no comando.",
        ],
        whenToUse:
          "Use quando faz sentido ter uma única instância compartilhada, como pool de conexão, configuração global ou cache. Use com cautela porque pode criar estado global.",
        pros: [
          "Você pode ter certeza que uma classe só terá uma única instância.",
          "Você ganha um ponto de acesso global para aquela instância.",
          "O objeto singleton é inicializado somente quando for pedido pela primeira vez.",
        ],
        cons: [
          "Pode violar o princípio de responsabilidade única.",
          "Requer tratamento especial em ambientes multithreaded.",
          "Pode dificultar testes unitários porque acesso estático e construtores privados são difíceis de simular.",
        ],
      },
    },
    code: {
      without: {
        file: "singleton/src-without-pattern/main.ts",
        description: {
          en: "The client creates more than one database connection directly.",
          pt: "O cliente cria mais de uma conexão com banco de dados diretamente.",
        },
        code: String.raw`import { DatabaseConnection } from "./service/database-connection";

const db1 = new DatabaseConnection("mysql://user:password@localhost:3306/mydb");
db1.query("SELECT * FROM users");

const db2 = new DatabaseConnection("mysql://user:password@localhost:3306/mydb");
db2.query("SELECT * FROM users");`,
      },
      with: {
        file: "singleton/src-with-pattern/service/database-connection.ts",
        description: {
          en: "The constructor is private and every client receives the same cached instance.",
          pt: "O construtor é privado e todo cliente recebe a mesma instância em cache.",
        },
        code: String.raw`export class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor(private connectionString: string) {
    this.connect();
  }

  public static getInstance(connectionString: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(connectionString);
    }

    return DatabaseConnection.instance;
  }
}`,
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
          "Delegates object creation to a specialized method or class, keeping construction decisions in one place.",
        problem: [
          "Imagine you need to create different objects depending on a system decision, such as sending a notification by email, SMS, or another channel.",
          "If this decision is spread across the code, several places start to have conditionals and instantiate classes directly.",
        ],
        solution: [
          "Factory centralizes object creation in a specialized method or class.",
          "Instead of the client deciding directly which class to instantiate, it asks the factory to create the correct object.",
        ],
        analogy: [
          "Think about a pizza shop. You order pepperoni, Portuguese, or margherita pizza, but you do not assemble it manually.",
          "The kitchen knows which ingredients to use and delivers the final product.",
        ],
        whenToUse:
          "Use it when object creation becomes complex, such as APIs, frameworks, integrations, or objects with construction rules.",
        pros: [
          "Centralizes object creation and avoids scattered decision logic.",
          "Makes it easier to add new object types with less impact on client code.",
          "Helps the client depend on abstractions instead of concrete classes.",
        ],
        cons: [
          "Can add an extra layer when creation is too simple.",
          "The factory can grow too much if it starts concentrating many different rules.",
          "Depending on the approach, the factory still needs to change when a new type is added.",
        ],
      },
      pt: {
        name: "Factory",
        category: "creational",
        summary:
          "Delega a criação de objetos para um método ou classe especializada, mantendo decisões de construção em um só lugar.",
        problem: [
          "Imagine que você precisa criar objetos diferentes dependendo de uma decisão do sistema. Por exemplo: enviar uma notificação por e-mail, SMS ou outro canal.",
          "Se essa decisão fica espalhada pelo código, vários lugares passam a ter condicionais e instanciar classes diretamente.",
        ],
        solution: [
          "O Factory centraliza a criação dos objetos em um método ou classe especializada.",
          "Em vez do cliente decidir diretamente qual classe instanciar, ele pede para a factory criar o objeto correto.",
        ],
        analogy: [
          "Pense em uma pizzaria. Você pede uma pizza de calabresa, portuguesa ou marguerita, mas não monta a pizza manualmente.",
          "A cozinha sabe quais ingredientes usar e entrega o produto pronto.",
        ],
        whenToUse:
          "Use quando a criação de objetos começa a ficar complexa, como em APIs, frameworks, integrações ou objetos com regras de construção.",
        pros: [
          "Centraliza a criação de objetos e evita lógica de decisão espalhada.",
          "Facilita adicionar novos tipos de objetos com menos impacto no código cliente.",
          "Ajuda o cliente a depender de abstrações em vez de classes concretas.",
        ],
        cons: [
          "Pode adicionar uma camada extra em casos onde a criação é simples demais.",
          "A factory pode crescer demais se passar a concentrar muitas regras diferentes.",
          "Ainda pode ser preciso alterar a factory quando um novo tipo é incluído, dependendo da abordagem escolhida.",
        ],
      },
    },
    code: {
      without: {
        file: "factory/src-without-pattern/main.ts",
        description: {
          en: "The decision about which concrete notifier to create stays in the client code.",
          pt: "A decisão sobre qual notificador concreto criar fica no código cliente.",
        },
        code: String.raw`function notify(type: NotificationType, message: string): void {
  if (type === "email") {
    const notifier = new EmailNotifier();
    notifier.send(message);
    return;
  }

  if (type === "sms") {
    const notifier = new SmsNotifier();
    notifier.send(message);
    return;
  }
}`,
      },
      with: {
        file: "factory/src-with-pattern/factories/notifier-factory.ts",
        description: {
          en: "The factory centralizes creation and returns objects through the same interface.",
          pt: "A factory centraliza a criação e retorna objetos pela mesma interface.",
        },
        code: String.raw`export class NotifierFactory {
  static create(type: NotificationType): Notifier {
    if (type === "email") {
      return new EmailNotifier();
    }

    if (type === "sms") {
      return new SmsNotifier();
    }

    throw new Error(\`Tipo de notificacao nao suportado: \${type}\`);
  }
}`,
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
          "Works as a bridge for incompatible interfaces by translating calls from one system to another.",
        problem: [
          "You need to integrate an existing class that is not compatible with the design used by your code.",
          "You may also need to integrate third-party libraries or legacy components without changing their original source code.",
        ],
        solution: [
          "Adapter wraps an object from one class, called the adaptee, and exposes an interface expected by clients.",
          "It translates method calls from the expected interface into calls that are compatible with the original object.",
        ],
        analogy: [
          "When you travel from Brazil to Europe, your plug may not fit into the outlet.",
          "A plug adapter solves the problem by connecting two incompatible formats.",
        ],
        whenToUse:
          "Use it to connect incompatible interfaces, such as external APIs, legacy systems, or library migrations.",
        pros: [
          "Separates interface or data conversion from the main business logic.",
          "Allows new adapters without breaking existing client code.",
          "Protects the rest of the application from details of third-party libraries.",
        ],
        cons: [
          "Increases the overall code complexity with new interfaces and classes.",
          "Sometimes changing the service class directly is simpler.",
          "Adapters need to evolve when external APIs change.",
        ],
      },
      pt: {
        name: "Adapter",
        category: "structural",
        summary:
          "Serve como ponte para interfaces incompatíveis, traduzindo chamadas de um sistema para outro.",
        problem: [
          "Você precisa integrar uma classe existente que não é compatível com o padrão de projeto que você está usando.",
          "Você também pode precisar integrar bibliotecas ou componentes de terceiros sem modificar o código fonte original.",
        ],
        solution: [
          "O Adapter encapsula um objeto de uma classe, o adaptado, e expõe uma interface que é esperada pelos clientes.",
          "Ele traduz as chamadas de método da interface esperada para chamadas compatíveis com o objeto original.",
        ],
        analogy: [
          "Quando você viaja do Brasil para a Europa, seu plugue pode não caber na tomada.",
          "Um adaptador de tomada resolve o problema conectando dois formatos incompatíveis.",
        ],
        whenToUse:
          "Use quando precisar conectar interfaces incompatíveis, como APIs externas, sistemas legados ou migração de bibliotecas.",
        pros: [
          "Separa a conversão de interface ou de dados da lógica primária do negócio.",
          "Permite introduzir novos adaptadores sem quebrar o código cliente existente.",
          "Protege o restante da aplicação dos detalhes de bibliotecas de terceiros.",
        ],
        cons: [
          "A complexidade geral do código aumenta com novas interfaces e classes.",
          "Algumas vezes é mais simples mudar a classe serviço diretamente.",
          "Adapters precisam evoluir quando APIs externas mudam.",
        ],
      },
    },
    code: {
      without: {
        file: "adapter/src-without-pattern/generators/sales-report-generator-jspdf.ts",
        description: {
          en: "The report generator depends directly on jsPDF and mixes business flow with library details.",
          pt: "O gerador de relatório depende diretamente do jsPDF e mistura fluxo de negócio com detalhes da biblioteca.",
        },
        code: String.raw`export class SalesReportGeneratorJSpdf {
  generate(): void {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.setFillColor(230, 230, 230);
    doc.rect(20, 40, 75, 25, "F");

    const fileName = new Date().getTime() + "-invalid.pdf";
    doc.save(fileName);
  }
}`,
      },
      with: {
        file: "adapter/src-with-pattern/generators/sales-report-generator.ts",
        description: {
          en: "The generator only depends on the PdfAdapter contract. Any compatible adapter can be used.",
          pt: "O gerador depende apenas do contrato PdfAdapter. Qualquer adapter compatível pode ser usado.",
        },
        code: String.raw`export interface PdfAdapter {
  generate(fileName: string, content: string): Promise<void>;
}

export class SalesReportGenerator {
  constructor(private pdfAdapter: PdfAdapter) {}

  async generate(): Promise<void> {
    const fileName = new Date().getTime() + "-valid.pdf";
    const content = "Hello world!";

    await this.pdfAdapter.generate(fileName, content);
  }
}`,
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
          "Adds new responsibilities to an object dynamically by wrapping it with objects that share the same interface.",
        problem: [
          "Imagine you have a simple object, such as a coffee, and you want to add new responsibilities to it: milk, chocolate, whipped cream, discount, extra fee, and so on.",
          "A common solution is to put several conditionals inside the original class or create many subclasses for each combination.",
        ],
        solution: [
          "Decorator wraps an object with another object that has the same interface.",
          "Each decorator adds a specific behavior and forwards the rest to the original object.",
        ],
        analogy: [
          "Think about clothing. You can wear a T-shirt and then add a jacket, a scarf, or a coat.",
          "Each layer adds something new, but the person remains the same.",
        ],
        whenToUse:
          "Use it to add behavior without changing the original object, such as middleware, interceptors, logs, validations, or optional extensions.",
        pros: [
          "Adds responsibilities without changing the original class.",
          "Allows behaviors to be combined flexibly at runtime.",
          "Avoids a subclass explosion for behavior combinations.",
        ],
        cons: [
          "Too many decorator layers can make the flow harder to read.",
          "It can be more complex than a direct solution when there are few variations.",
          "The order of decorators can matter in some scenarios.",
        ],
      },
      pt: {
        name: "Decorator",
        category: "structural",
        summary:
          "Permite adicionar novas responsabilidades a um objeto de forma dinâmica, envolvendo-o em outros objetos com a mesma interface.",
        problem: [
          "Imagine que você tem um objeto simples, como um café, e quer adicionar novas responsabilidades a ele: leite, chocolate, chantilly, desconto, taxa extra e assim por diante.",
          "Uma solução comum é colocar várias condicionais dentro da classe original ou criar muitas subclasses para cada combinação.",
        ],
        solution: [
          "O Decorator envolve um objeto com outro objeto que possui a mesma interface.",
          "Cada decorator adiciona um comportamento específico e repassa o restante para o objeto original.",
        ],
        analogy: [
          "Pense em uma roupa. Você pode usar uma camiseta e depois adicionar uma jaqueta, um cachecol ou um casaco.",
          "Cada camada adiciona algo novo, mas a pessoa continua sendo a mesma.",
        ],
        whenToUse:
          "Use quando quiser adicionar comportamento sem alterar o objeto original, como em middlewares, interceptors, logs, validações ou extensões opcionais.",
        pros: [
          "Adiciona responsabilidades sem alterar a classe original.",
          "Permite combinar comportamentos de forma flexível em tempo de execução.",
          "Evita explosão de subclasses para representar combinações de comportamentos.",
        ],
        cons: [
          "Muitas camadas de decorators podem dificultar a leitura do fluxo.",
          "Pode ser mais complexo do que uma solução direta quando existem poucas variações.",
          "A ordem dos decorators pode importar em alguns cenários.",
        ],
      },
    },
    code: {
      without: {
        file: "decorator/src-without-pattern/services/coffee.ts",
        description: {
          en: "The Coffee class accumulates parameters and conditionals for each new add-on.",
          pt: "A classe Coffee acumula parâmetros e condicionais para cada novo adicional.",
        },
        code: String.raw`export class Coffee {
  constructor(
    private withMilk = false,
    private withChocolate = false
  ) {}

  getPrice(): number {
    let price = 5;

    if (this.withMilk) price += 2;
    if (this.withChocolate) price += 3;

    return price;
  }
}`,
      },
      with: {
        file: "decorator/src-with-pattern/main.ts",
        description: {
          en: "Each decorator adds one behavior while preserving the same Drink interface.",
          pt: "Cada decorator adiciona um comportamento preservando a mesma interface Drink.",
        },
        code: String.raw`const coffee = new ChocolateDecorator(
  new MilkDecorator(new Coffee())
);

console.log(coffee.getDescription());
console.log(\`R$ \${coffee.getPrice()}\`);`,
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
          "Works like an automatic notification system: when the subject changes, all observers are notified.",
        problem: [
          "Imagine you have an important object in the system, such as an order, and several parts need to know when its status changes.",
          "Without care, the main class starts to know all notification services directly. Every new channel requires changing it.",
        ],
        solution: [
          "Observer creates a relationship between a central object, called the subject, and a list of interested objects, called observers.",
          "When the subject state changes, it automatically notifies all registered observers.",
        ],
        analogy: [
          "Think about a video channel. When a new video is published, all subscribers receive a notification.",
          "The channel does not manually message each person; it publishes the content and the platform notifies whoever subscribed.",
        ],
        whenToUse:
          "Use it when several parts of the system need to react to changes, such as events, webhooks, notifications, or state changes.",
        pros: [
          "Reduces coupling between the main object and objects that react to changes.",
          "Makes it easier to add new reactions without changing the main class.",
          "Helps when several parts of the system need to react to the same event or state change.",
        ],
        cons: [
          "If there are many observers, notification order and impact can be harder to understand.",
          "Automatic notifications can hide side effects when the flow is not well documented.",
          "In large systems, one observer error must not break all the others.",
        ],
      },
      pt: {
        name: "Observer",
        category: "behavioral",
        summary:
          "Funciona como uma notificação automática: quando o subject muda, todos os observadores são notificados.",
        problem: [
          "Imagine que você tem um objeto importante no sistema, como um pedido, e várias partes precisam saber quando ele muda de status.",
          "Sem cuidado, a classe principal começa a conhecer todos esses serviços diretamente. Cada novo canal de notificação exige uma alteração nela.",
        ],
        solution: [
          "O Observer cria uma relação entre um objeto central, chamado de subject, e uma lista de objetos interessados, chamados de observers.",
          "Quando o estado do subject muda, ele notifica automaticamente todos os observadores cadastrados.",
        ],
        analogy: [
          "Pense em um canal de vídeos. Quando um novo vídeo é publicado, todos os inscritos recebem uma notificação.",
          "O canal não precisa mandar uma mensagem manual para cada pessoa; ele apenas publica o conteúdo e a plataforma avisa quem está inscrito.",
        ],
        whenToUse:
          "Use quando várias partes do sistema precisam reagir a mudanças, como eventos, webhooks, notificações ou mudanças de estado.",
        pros: [
          "Reduz o acoplamento entre o objeto principal e os objetos que reagem às mudanças.",
          "Facilita adicionar novas reações sem alterar a classe principal.",
          "Ajuda quando várias partes do sistema precisam reagir ao mesmo evento ou mudança de estado.",
        ],
        cons: [
          "Se existirem muitos observadores, pode ficar mais difícil entender a ordem e o impacto das notificações.",
          "Notificações automáticas podem esconder efeitos colaterais se o fluxo não estiver bem documentado.",
          "Em sistemas grandes, um erro em um observador não deve quebrar todos os demais.",
        ],
      },
    },
    code: {
      without: {
        file: "observer/src-without-pattern/services/order.ts",
        description: {
          en: "The Order class knows every notification channel directly.",
          pt: "A classe Order conhece diretamente todos os canais de notificação.",
        },
        code: String.raw`export class Order {
  private emailNotifier = new EmailNotifier();
  private smsNotifier = new SmsNotifier();

  updateStatus(status: string): void {
    this.status = status;

    this.emailNotifier.send(this.id, this.status);
    this.smsNotifier.send(this.id, this.status);
  }
}`,
      },
      with: {
        file: "observer/src-with-pattern/subjects/order.ts",
        description: {
          en: "The Order class only notifies registered observers. It does not know what each observer does.",
          pt: "A classe Order apenas notifica observadores cadastrados. Ela não sabe o que cada observador faz.",
        },
        code: String.raw`export class Order {
  private observers: OrderObserver[] = [];

  attach(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  updateStatus(status: string): void {
    this.status = status;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) =>
      observer.update(this.id, this.status)
    );
  }
}`,
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
          "Defines a family of algorithms, encapsulates each one, and lets them be swapped at runtime.",
        problem: [
          "Imagine you have a rule that can be calculated in several ways, such as standard shipping, express shipping, or pickup.",
          "Without a pattern, it is common to create a method full of conditionals. Each new algorithm grows that method.",
        ],
        solution: [
          "Strategy defines a family of algorithms, puts each algorithm in a separate class, and makes all of them follow the same interface.",
          "The client uses the common interface and can swap the strategy at runtime without knowing the details of the chosen implementation.",
        ],
        analogy: [
          "Think about a maps application. You can choose to go by car, walking, or by bike.",
          "The destination is the same, but the strategy to calculate the route changes.",
        ],
        whenToUse:
          "Use it when you need to swap algorithms or rules at runtime, such as validation, sorting, authentication, shipping calculation, or discount rules.",
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
      },
      pt: {
        name: "Strategy",
        category: "behavioral",
        summary:
          "Define uma família de algoritmos, encapsula cada um deles e permite trocá-los em tempo de execução.",
        problem: [
          "Imagine que você tem uma regra que pode ser calculada de várias formas, como frete comum, frete expresso ou retirada na loja.",
          "Sem um padrão, é comum criar um método cheio de condicionais. Cada novo algoritmo aumenta esse método.",
        ],
        solution: [
          "O Strategy define uma família de algoritmos, coloca cada algoritmo em uma classe separada e faz todos seguirem a mesma interface.",
          "O cliente usa a interface comum e pode trocar a estratégia em tempo de execução, sem precisar saber os detalhes da implementação escolhida.",
        ],
        analogy: [
          "Pense em um aplicativo de mapas. Você pode escolher ir de carro, a pé ou de bicicleta.",
          "O destino é o mesmo, mas a estratégia para calcular o caminho muda.",
        ],
        whenToUse:
          "Use quando precisar trocar algoritmos ou regras em tempo de execução, como validação, ordenação, autenticação, cálculo de frete ou regras de desconto.",
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
      },
    },
    code: {
      without: {
        file: "strategy/src-without-pattern/services/shipping-calculator.ts",
        description: {
          en: "The calculator concentrates every shipping algorithm in the same method.",
          pt: "A calculadora concentra todos os algoritmos de frete no mesmo método.",
        },
        code: String.raw`export class ShippingCalculator {
  calculate(type: ShippingType, distanceInKm: number): number {
    if (type === "standard") {
      return 10 + distanceInKm * 1.2;
    }

    if (type === "express") {
      return 20 + distanceInKm * 2;
    }

    if (type === "pickup") {
      return 0;
    }
  }
}`,
      },
      with: {
        file: "strategy/src-with-pattern/services/shipping-calculator.ts",
        description: {
          en: "The calculator delegates the algorithm to the current strategy.",
          pt: "A calculadora delega o algoritmo para a estratégia atual.",
        },
        code: String.raw`export class ShippingCalculator {
  constructor(private strategy: ShippingStrategy) {}

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  calculate(distanceInKm: number): number {
    return this.strategy.calculate(distanceInKm);
  }
}`,
      },
    },
  },
];
