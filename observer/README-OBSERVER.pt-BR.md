# Observer (Observador)

🇺🇸 [Read in English](./README-OBSERVER.md)

> (Padrão Comportamental)

### 😠 Problema

Imagine que você tem um objeto importante no sistema, como um pedido, e várias partes precisam saber quando ele muda de status: e-mail, SMS, push, log, painel administrativo e assim por diante.

Sem cuidado, a classe principal começa a conhecer todos esses serviços diretamente. Cada novo canal de notificação exige uma alteração nela, mesmo que a regra principal do pedido não tenha mudado.

### 😁 Solução

O Observer cria uma relação entre um objeto central, chamado de **subject**, e uma lista de objetos interessados, chamados de **observers**.

Quando o estado do subject muda, ele notifica automaticamente todos os observadores cadastrados. Assim, o subject não precisa conhecer os detalhes de cada reação.

### 🤔 Analogia com o mundo real

Pense em um canal de vídeos. Quando um novo vídeo é publicado, todos os inscritos recebem uma notificação. O canal não precisa mandar uma mensagem manual para cada pessoa; ele apenas publica o conteúdo e a plataforma avisa quem está inscrito.

### 📝 Exemplo

Nesse diretório, você encontrará um exemplo de implementação do padrão Observer no diretório **src-with-pattern** e outro exemplo sem a utilização do padrão no diretório **src-without-pattern**.

O exemplo usa um pedido que muda de status e precisa notificar canais como e-mail e SMS.

#### Vantagens & Desvantagens

| Prós | Contras |
| ---- | ------- |
| Reduz o acoplamento entre o objeto principal e os objetos que reagem às mudanças. | Se existirem muitos observadores, pode ficar mais difícil entender a ordem e o impacto das notificações. |
| Facilita adicionar novas reações sem alterar a classe principal. | Notificações automáticas podem esconder efeitos colaterais se o fluxo não estiver bem documentado. |
| Ajuda quando várias partes do sistema precisam reagir ao mesmo evento ou mudança de estado. | Em sistemas grandes, pode ser necessário controlar erros para que um observador não quebre os demais. |

### Minha Opinião

É um padrão muito útil para eventos, notificações e fluxos onde vários pontos do sistema precisam reagir a uma mudança. Só é importante evitar exageros: se tudo vira evento, o fluxo do sistema pode ficar difícil de acompanhar.
