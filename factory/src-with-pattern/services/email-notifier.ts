import { Notifier } from "./notifier";

export class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`[Email] ${message}`);
  }
}
