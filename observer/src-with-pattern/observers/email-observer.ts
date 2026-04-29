import { OrderObserver } from "./order-observer";

export class EmailObserver implements OrderObserver {
  update(orderId: string, status: string): void {
    console.log(`[Email] Pedido ${orderId} mudou para: ${status}`);
  }
}
