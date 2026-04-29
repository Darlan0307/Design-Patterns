import { EmailNotifier } from "./services/email-notifier";
import { SmsNotifier } from "./services/sms-notifier";

type NotificationType = "email" | "sms";

function notify(type: NotificationType, message: string): void {
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
}

notify("email", "Seu pedido foi enviado");
notify("sms", "Seu pedido saiu para entrega");

/*
- A decisao sobre qual classe instanciar fica junto da regra de uso
- Se essa logica aparecer em varios lugares, qualquer novo tipo exige muitas alteracoes
- O cliente precisa conhecer as classes concretas
*/
