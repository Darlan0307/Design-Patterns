import { Order } from "./services/order";

const order = new Order("123");

order.updateStatus("Pagamento aprovado");

/*
- O pedido conhece diretamente todos os canais de notificacao
- Para adicionar WhatsApp, Push ou outro canal, precisamos alterar a classe Order
- A regra principal do pedido fica misturada com a regra de notificacao
*/
