import { OrderObserver } from "../observers/order-observer";

export class Order {
  private status = "Criado";
  private observers: OrderObserver[] = [];

  constructor(private id: string) {}

  attach(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  detach(observer: OrderObserver): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  updateStatus(status: string): void {
    this.status = status;
    console.log(`Pedido ${this.id} atualizado para: ${this.status}`);
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.id, this.status));
  }
}
