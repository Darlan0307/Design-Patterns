import { EmailNotifier } from "../services/email-notifier";
import { Notifier } from "../services/notifier";
import { SmsNotifier } from "../services/sms-notifier";

export type NotificationType = "email" | "sms";

export class NotifierFactory {
  static create(type: NotificationType): Notifier {
    if (type === "email") {
      return new EmailNotifier();
    }

    if (type === "sms") {
      return new SmsNotifier();
    }

    throw new Error(`Tipo de notificacao nao suportado: ${type}`);
  }
}
