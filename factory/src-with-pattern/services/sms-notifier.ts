import { Notifier } from "./notifier";

export class SmsNotifier implements Notifier {
  send(message: string): void {
    console.log(`[SMS] ${message}`);
  }
}
