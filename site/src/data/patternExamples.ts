import singletonWithoutMain from "../../../singleton/src-without-pattern/main.ts?raw";
import singletonWithoutConnection from "../../../singleton/src-without-pattern/service/database-connection.ts?raw";
import singletonWithMain from "../../../singleton/src-with-pattern/main.ts?raw";
import singletonWithConnection from "../../../singleton/src-with-pattern/service/database-connection.ts?raw";

import factoryWithoutMain from "../../../factory/src-without-pattern/main.ts?raw";
import factoryWithoutEmail from "../../../factory/src-without-pattern/services/email-notifier.ts?raw";
import factoryWithoutSms from "../../../factory/src-without-pattern/services/sms-notifier.ts?raw";
import factoryWithMain from "../../../factory/src-with-pattern/main.ts?raw";
import factoryWithFactory from "../../../factory/src-with-pattern/factories/notifier-factory.ts?raw";
import factoryWithNotifier from "../../../factory/src-with-pattern/services/notifier.ts?raw";
import factoryWithEmail from "../../../factory/src-with-pattern/services/email-notifier.ts?raw";
import factoryWithSms from "../../../factory/src-with-pattern/services/sms-notifier.ts?raw";

import adapterWithoutMain from "../../../adapter/src-without-pattern/main.ts?raw";
import adapterWithoutJspdf from "../../../adapter/src-without-pattern/generators/sales-report-generator-jspdf.ts?raw";
import adapterWithoutPdflib from "../../../adapter/src-without-pattern/generators/sales-report-generator-pdflib.ts?raw";
import adapterWithMain from "../../../adapter/src-with-pattern/main.ts?raw";
import adapterWithGenerator from "../../../adapter/src-with-pattern/generators/sales-report-generator.ts?raw";
import adapterWithInterface from "../../../adapter/src-with-pattern/services/interfaces/pdf-adapter.ts?raw";
import adapterWithJspdf from "../../../adapter/src-with-pattern/services/external/jspdf-adapter.ts?raw";
import adapterWithPdflib from "../../../adapter/src-with-pattern/services/external/pdflib-adapter.ts?raw";

import decoratorWithoutMain from "../../../decorator/src-without-pattern/main.ts?raw";
import decoratorWithoutCoffee from "../../../decorator/src-without-pattern/services/coffee.ts?raw";
import decoratorWithMain from "../../../decorator/src-with-pattern/main.ts?raw";
import decoratorWithDrink from "../../../decorator/src-with-pattern/services/drink.ts?raw";
import decoratorWithCoffee from "../../../decorator/src-with-pattern/services/coffee.ts?raw";
import decoratorWithMilk from "../../../decorator/src-with-pattern/decorators/milk-decorator.ts?raw";
import decoratorWithChocolate from "../../../decorator/src-with-pattern/decorators/chocolate-decorator.ts?raw";

import observerWithoutMain from "../../../observer/src-without-pattern/main.ts?raw";
import observerWithoutOrder from "../../../observer/src-without-pattern/services/order.ts?raw";
import observerWithoutEmail from "../../../observer/src-without-pattern/services/email-notifier.ts?raw";
import observerWithoutSms from "../../../observer/src-without-pattern/services/sms-notifier.ts?raw";
import observerWithMain from "../../../observer/src-with-pattern/main.ts?raw";
import observerWithOrder from "../../../observer/src-with-pattern/subjects/order.ts?raw";
import observerWithInterface from "../../../observer/src-with-pattern/observers/order-observer.ts?raw";
import observerWithEmail from "../../../observer/src-with-pattern/observers/email-observer.ts?raw";
import observerWithSms from "../../../observer/src-with-pattern/observers/sms-observer.ts?raw";

import strategyWithoutMain from "../../../strategy/src-without-pattern/main.ts?raw";
import strategyWithoutCalculator from "../../../strategy/src-without-pattern/services/shipping-calculator.ts?raw";
import strategyWithMain from "../../../strategy/src-with-pattern/main.ts?raw";
import strategyWithCalculator from "../../../strategy/src-with-pattern/services/shipping-calculator.ts?raw";
import strategyWithInterface from "../../../strategy/src-with-pattern/strategies/shipping-strategy.ts?raw";
import strategyWithStandard from "../../../strategy/src-with-pattern/strategies/standard-shipping.ts?raw";
import strategyWithExpress from "../../../strategy/src-with-pattern/strategies/express-shipping.ts?raw";
import strategyWithPickup from "../../../strategy/src-with-pattern/strategies/pickup-shipping.ts?raw";
import type { Language } from "./patterns";

export type ExampleSide = "without" | "with";

export type WorkspaceFile = {
  path: string;
  role: Record<Language, string>;
  code: string;
};

export type ExampleGroup = {
  title: Record<Language, string>;
  summary: Record<Language, string>;
  flow: string[];
  files: WorkspaceFile[];
};

export type PatternWorkspace = Record<ExampleSide, ExampleGroup>;

const common = {
  main: {
    en: "Entry point that shows how the client uses the example.",
    pt: "Ponto de entrada que mostra como o cliente usa o exemplo.",
  },
  concrete: {
    en: "Concrete implementation used by the example.",
    pt: "Implementação concreta usada pelo exemplo.",
  },
};

export const patternExamples: Record<string, PatternWorkspace> = {
  singleton: {
    without: {
      title: { en: "Without Pattern", pt: "Sem Pattern" },
      summary: {
        en: "The client creates each database connection directly, so every `new` can produce another instance.",
        pt: "O cliente cria cada conexão diretamente, então cada `new` pode produzir outra instância.",
      },
      flow: ["main.ts", "new DatabaseConnection()", "DatabaseConnection instance"],
      files: [
        { path: "src-without-pattern/main.ts", role: common.main, code: singletonWithoutMain },
        {
          path: "src-without-pattern/service/database-connection.ts",
          role: {
            en: "Public constructor allows unlimited instances.",
            pt: "Construtor público permite instâncias ilimitadas.",
          },
          code: singletonWithoutConnection,
        },
      ],
    },
    with: {
      title: { en: "With Pattern", pt: "Com Pattern" },
      summary: {
        en: "The constructor is private and `getInstance` returns the same cached object to every caller.",
        pt: "O construtor é privado e `getInstance` retorna o mesmo objeto em cache para todos os clientes.",
      },
      flow: ["main.ts", "DatabaseConnection.getInstance()", "same DatabaseConnection instance"],
      files: [
        { path: "src-with-pattern/main.ts", role: common.main, code: singletonWithMain },
        {
          path: "src-with-pattern/service/database-connection.ts",
          role: {
            en: "Singleton owner: stores the static instance and controls creation.",
            pt: "Dono do Singleton: armazena a instância estática e controla a criação.",
          },
          code: singletonWithConnection,
        },
      ],
    },
  },
  factory: {
    without: {
      title: { en: "Without Pattern", pt: "Sem Pattern" },
      summary: {
        en: "The client decides which class to instantiate, keeping construction logic next to usage.",
        pt: "O cliente decide qual classe instanciar, mantendo a lógica de criação junto do uso.",
      },
      flow: ["main.ts", "if type === email/sms", "EmailNotifier | SmsNotifier"],
      files: [
        { path: "src-without-pattern/main.ts", role: common.main, code: factoryWithoutMain },
        { path: "src-without-pattern/services/email-notifier.ts", role: common.concrete, code: factoryWithoutEmail },
        { path: "src-without-pattern/services/sms-notifier.ts", role: common.concrete, code: factoryWithoutSms },
      ],
    },
    with: {
      title: { en: "With Pattern", pt: "Com Pattern" },
      summary: {
        en: "The client asks the factory for a notifier, and creation rules stay centralized.",
        pt: "O cliente pede um notificador para a factory, e as regras de criação ficam centralizadas.",
      },
      flow: ["main.ts", "NotifierFactory.create()", "Notifier interface", "EmailNotifier | SmsNotifier"],
      files: [
        { path: "src-with-pattern/main.ts", role: common.main, code: factoryWithMain },
        {
          path: "src-with-pattern/factories/notifier-factory.ts",
          role: {
            en: "Central creation point that chooses the concrete notifier.",
            pt: "Ponto central de criação que escolhe o notificador concreto.",
          },
          code: factoryWithFactory,
        },
        {
          path: "src-with-pattern/services/notifier.ts",
          role: {
            en: "Contract shared by all notifiers.",
            pt: "Contrato compartilhado por todos os notificadores.",
          },
          code: factoryWithNotifier,
        },
        { path: "src-with-pattern/services/email-notifier.ts", role: common.concrete, code: factoryWithEmail },
        { path: "src-with-pattern/services/sms-notifier.ts", role: common.concrete, code: factoryWithSms },
      ],
    },
  },
  adapter: {
    without: {
      title: { en: "Without Pattern", pt: "Sem Pattern" },
      summary: {
        en: "Each report generator depends directly on a PDF library, so library details leak into the business class.",
        pt: "Cada gerador depende diretamente de uma biblioteca PDF, então detalhes da lib vazam para a classe de negócio.",
      },
      flow: ["main.ts", "SalesReportGeneratorJSpdf", "jsPDF"],
      files: [
        { path: "src-without-pattern/main.ts", role: common.main, code: adapterWithoutMain },
        {
          path: "src-without-pattern/generators/sales-report-generator-jspdf.ts",
          role: { en: "Generator coupled to jsPDF.", pt: "Gerador acoplado ao jsPDF." },
          code: adapterWithoutJspdf,
        },
        {
          path: "src-without-pattern/generators/sales-report-generator-pdflib.ts",
          role: { en: "Alternative generator coupled to pdf-lib.", pt: "Gerador alternativo acoplado ao pdf-lib." },
          code: adapterWithoutPdflib,
        },
      ],
    },
    with: {
      title: { en: "With Pattern", pt: "Com Pattern" },
      summary: {
        en: "The report generator depends on `PdfAdapter`, and each library adapter translates the expected contract.",
        pt: "O gerador depende de `PdfAdapter`, e cada adapter traduz o contrato esperado para uma biblioteca.",
      },
      flow: ["main.ts", "SalesReportGenerator", "PdfAdapter", "JSPdfAdapter | PDFLibAdapter"],
      files: [
        { path: "src-with-pattern/main.ts", role: common.main, code: adapterWithMain },
        {
          path: "src-with-pattern/generators/sales-report-generator.ts",
          role: { en: "Business class depending only on the PDF contract.", pt: "Classe de negócio dependendo apenas do contrato PDF." },
          code: adapterWithGenerator,
        },
        {
          path: "src-with-pattern/services/interfaces/pdf-adapter.ts",
          role: { en: "Interface expected by the client.", pt: "Interface esperada pelo cliente." },
          code: adapterWithInterface,
        },
        { path: "src-with-pattern/services/external/jspdf-adapter.ts", role: common.concrete, code: adapterWithJspdf },
        { path: "src-with-pattern/services/external/pdflib-adapter.ts", role: common.concrete, code: adapterWithPdflib },
      ],
    },
  },
  decorator: {
    without: {
      title: { en: "Without Pattern", pt: "Sem Pattern" },
      summary: {
        en: "Optional additions become constructor flags and conditionals inside the base class.",
        pt: "Adicionais opcionais viram flags no construtor e condicionais dentro da classe base.",
      },
      flow: ["main.ts", "new Coffee(true, true)", "Coffee conditionals"],
      files: [
        { path: "src-without-pattern/main.ts", role: common.main, code: decoratorWithoutMain },
        {
          path: "src-without-pattern/services/coffee.ts",
          role: { en: "Base class accumulating add-on rules.", pt: "Classe base acumulando regras dos adicionais." },
          code: decoratorWithoutCoffee,
        },
      ],
    },
    with: {
      title: { en: "With Pattern", pt: "Com Pattern" },
      summary: {
        en: "Every add-on wraps a `Drink`, so behavior is composed without changing the original coffee.",
        pt: "Cada adicional envolve um `Drink`, então o comportamento é composto sem alterar o café original.",
      },
      flow: ["main.ts", "ChocolateDecorator", "MilkDecorator", "Coffee"],
      files: [
        { path: "src-with-pattern/main.ts", role: common.main, code: decoratorWithMain },
        {
          path: "src-with-pattern/services/drink.ts",
          role: { en: "Common interface shared by the base object and decorators.", pt: "Interface comum compartilhada pelo objeto base e pelos decorators." },
          code: decoratorWithDrink,
        },
        { path: "src-with-pattern/services/coffee.ts", role: common.concrete, code: decoratorWithCoffee },
        { path: "src-with-pattern/decorators/milk-decorator.ts", role: common.concrete, code: decoratorWithMilk },
        { path: "src-with-pattern/decorators/chocolate-decorator.ts", role: common.concrete, code: decoratorWithChocolate },
      ],
    },
  },
  observer: {
    without: {
      title: { en: "Without Pattern", pt: "Sem Pattern" },
      summary: {
        en: "The order knows every notification channel and calls each one directly.",
        pt: "O pedido conhece todos os canais de notificação e chama cada um diretamente.",
      },
      flow: ["main.ts", "Order.updateStatus()", "EmailNotifier + SmsNotifier"],
      files: [
        { path: "src-without-pattern/main.ts", role: common.main, code: observerWithoutMain },
        {
          path: "src-without-pattern/services/order.ts",
          role: { en: "Subject mixed with concrete notification channels.", pt: "Subject misturado com canais concretos de notificação." },
          code: observerWithoutOrder,
        },
        { path: "src-without-pattern/services/email-notifier.ts", role: common.concrete, code: observerWithoutEmail },
        { path: "src-without-pattern/services/sms-notifier.ts", role: common.concrete, code: observerWithoutSms },
      ],
    },
    with: {
      title: { en: "With Pattern", pt: "Com Pattern" },
      summary: {
        en: "The order only manages observers. Each observer decides how to react to status changes.",
        pt: "O pedido apenas gerencia observadores. Cada observer decide como reagir às mudanças de status.",
      },
      flow: ["main.ts", "Order.attach()", "OrderObserver[]", "EmailObserver | SmsObserver"],
      files: [
        { path: "src-with-pattern/main.ts", role: common.main, code: observerWithMain },
        {
          path: "src-with-pattern/subjects/order.ts",
          role: { en: "Subject that stores observers and notifies them.", pt: "Subject que armazena observadores e notifica todos." },
          code: observerWithOrder,
        },
        {
          path: "src-with-pattern/observers/order-observer.ts",
          role: { en: "Observer contract used by the subject.", pt: "Contrato de observer usado pelo subject." },
          code: observerWithInterface,
        },
        { path: "src-with-pattern/observers/email-observer.ts", role: common.concrete, code: observerWithEmail },
        { path: "src-with-pattern/observers/sms-observer.ts", role: common.concrete, code: observerWithSms },
      ],
    },
  },
  strategy: {
    without: {
      title: { en: "Without Pattern", pt: "Sem Pattern" },
      summary: {
        en: "The calculator concentrates every shipping algorithm in conditionals.",
        pt: "A calculadora concentra todos os algoritmos de frete em condicionais.",
      },
      flow: ["main.ts", "ShippingCalculator.calculate(type)", "if standard / express / pickup"],
      files: [
        { path: "src-without-pattern/main.ts", role: common.main, code: strategyWithoutMain },
        {
          path: "src-without-pattern/services/shipping-calculator.ts",
          role: { en: "Class with all algorithms in the same method.", pt: "Classe com todos os algoritmos no mesmo método." },
          code: strategyWithoutCalculator,
        },
      ],
    },
    with: {
      title: { en: "With Pattern", pt: "Com Pattern" },
      summary: {
        en: "The calculator delegates the algorithm to the current strategy.",
        pt: "A calculadora delega o algoritmo para a estratégia atual.",
      },
      flow: ["main.ts", "ShippingCalculator", "ShippingStrategy", "Standard | Express | Pickup"],
      files: [
        { path: "src-with-pattern/main.ts", role: common.main, code: strategyWithMain },
        {
          path: "src-with-pattern/services/shipping-calculator.ts",
          role: { en: "Context class that uses the selected strategy.", pt: "Classe de contexto que usa a estratégia selecionada." },
          code: strategyWithCalculator,
        },
        {
          path: "src-with-pattern/strategies/shipping-strategy.ts",
          role: { en: "Common contract for all algorithms.", pt: "Contrato comum para todos os algoritmos." },
          code: strategyWithInterface,
        },
        { path: "src-with-pattern/strategies/standard-shipping.ts", role: common.concrete, code: strategyWithStandard },
        { path: "src-with-pattern/strategies/express-shipping.ts", role: common.concrete, code: strategyWithExpress },
        { path: "src-with-pattern/strategies/pickup-shipping.ts", role: common.concrete, code: strategyWithPickup },
      ],
    },
  },
};
