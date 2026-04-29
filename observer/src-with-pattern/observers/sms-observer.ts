import { OrderObserver } from "./order-observer";

export class SmsObserver implements OrderObserver {
  update(orderId: string, status: string): void {
    console.log(`[SMS] Pedido ${orderId} mudou para: ${status}`);
  }
}
