export interface OrderObserver {
  update(orderId: string, status: string): void;
}
