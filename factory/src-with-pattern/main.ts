import { NotifierFactory } from "./factories/notifier-factory";

const emailNotifier = NotifierFactory.create("email");
emailNotifier.send("Seu pedido foi enviado");

const smsNotifier = NotifierFactory.create("sms");
smsNotifier.send("Seu pedido saiu para entrega");

/*
- O cliente pede um notificador para a factory
- A decisao de qual classe criar fica centralizada
- Novos tipos podem ser adicionados mexendo em um ponto claro do codigo
*/
