export class EmailNotifier {
  send(orderId: string, status: string): void {
    console.log(`[Email] Pedido ${orderId} mudou para: ${status}`);
  }
}
