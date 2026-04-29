export class SmsNotifier {
  send(orderId: string, status: string): void {
    console.log(`[SMS] Pedido ${orderId} mudou para: ${status}`);
  }
}
