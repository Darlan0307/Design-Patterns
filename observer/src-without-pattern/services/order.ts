import { EmailNotifier } from "./email-notifier";
import { SmsNotifier } from "./sms-notifier";

export class Order {
  private status = "Criado";
  private emailNotifier = new EmailNotifier();
  private smsNotifier = new SmsNotifier();

  constructor(private id: string) {}

  updateStatus(status: string): void {
    this.status = status;
    console.log(`Pedido ${this.id} atualizado para: ${this.status}`);

    this.emailNotifier.send(this.id, this.status);
    this.smsNotifier.send(this.id, this.status);
  }
}
