import { EmailObserver } from "./observers/email-observer";
import { SmsObserver } from "./observers/sms-observer";
import { Order } from "./subjects/order";

const order = new Order("123");

order.attach(new EmailObserver());
order.attach(new SmsObserver());

order.updateStatus("Pagamento aprovado");

/*
- O pedido nao sabe quais canais serao notificados
- Cada observador decide como reagir a mudanca de status
- Novos observadores podem ser adicionados sem alterar a classe Order
*/
