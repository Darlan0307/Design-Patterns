# Design Patterns em Prática

🇺🇸 [Read in English](./README.md)

Um repositório com implementações práticas e exemplos claros dos principais padrões de design na programação orientada a objetos.

## 📋 Sobre o Projeto

Este repositório tem como objetivo fornecer exemplos de implementação de diversos padrões de design, demonstrando situações onde podem ser aplicados. Os exemplos são organizados de forma simples, facilitando o aprendizado e a consulta rápida para desenvolvedores de todos os níveis.

> Os exemplos deste projeto têm foco didático. A intenção não é representar uma arquitetura robusta de produção, mas explicar o conceito de cada padrão de forma simples para que fique mais fácil aplicar a ideia em cenários reais.

---

## 🧩 Padrões Incluídos

> Em desenvolvimento

### Padrões Criacionais

- **[Singleton](./singleton/README-SINGLETON.pt-BR.md)**: Implementação que garante a existência de apenas uma instância de uma classe
- **[Factory](./factory/README-FACTORY.pt-BR.md)**: Centralização da criação de objetos em uma fábrica

<!--
- **Abstract Factory**: Criação de famílias de objetos relacionados
- **Builder**: Construção de objetos complexos passo a passo
- **Prototype**: Criação de novos objetos a partir da clonagem de objetos existentes -->

### Padrões Estruturais

- **[Adapter](./adapter/README-ADAPTER.pt-BR.md)**: Conexão entre interfaces incompatíveis
- **[Decorator](./decorator/README-DECORATOR.pt-BR.md)**: Adição dinâmica de responsabilidades a um objeto

<!-- - **Bridge**: Separação de abstração e implementação
- **Composite**: Composição de objetos em estruturas de árvore
- **Facade**: Interface simplificada para um conjunto de interfaces -->

### Padrões Comportamentais

- **[Observer](./observer/README-OBSERVER.pt-BR.md)**: Notificação automática de observadores quando um objeto muda
- **[Strategy](./strategy/README-STRATEGY.pt-BR.md)**: Troca de algoritmos em tempo de execução através de uma interface comum

---

<!-- - **Command**: Encapsulamento de solicitações como objetos
- **Iterator**: Acesso sequencial aos elementos de uma coleção
- **State**: Alteração do comportamento quando o estado interno muda -->

## 🧭 Quando Usar Cada Padrão

| Padrão | Quando usar |
| ------ | ----------- |
| **[Observer](./observer/README-OBSERVER.pt-BR.md)** | Quando várias partes do sistema precisam reagir a mudanças, como eventos, webhooks, notificações ou mudanças de estado. |
| **[Factory](./factory/README-FACTORY.pt-BR.md)** | Quando a criação de objetos começa a ficar complexa, como em APIs, frameworks, integrações ou objetos com regras de construção. |
| **[Singleton](./singleton/README-SINGLETON.pt-BR.md)** | Quando faz sentido ter uma única instância compartilhada, como pool de conexão, configuração global ou cache. Use com cautela por causa de estado global. |
| **[Decorator](./decorator/README-DECORATOR.pt-BR.md)** | Quando você quer adicionar comportamento sem alterar o objeto original, como em middlewares, interceptors, logs, validações ou extensões opcionais. |
| **[Strategy](./strategy/README-STRATEGY.pt-BR.md)** | Quando você precisa trocar algoritmos ou regras em tempo de execução, como validação, ordenação, autenticação, cálculo de frete ou regras de desconto. |
| **[Adapter](./adapter/README-ADAPTER.pt-BR.md)** | Quando você precisa conectar interfaces incompatíveis, como APIs externas, sistemas legados ou migração de bibliotecas. |

## 🔎 Referências e Inspirações

Este projeto foi criado usando como referência e inspiração conteúdos que explicam Design Patterns de forma prática e acessível:

- [Os 6 Design Patterns mais usados - Arthur Takeda](https://youtu.be/G-O90vR7SCU?si=flqiD-JxO6Tk7mPf)
- [Refactoring Guru - Design Patterns](https://refactoring.guru/pt-br/design-patterns)

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja adicionar novos exemplos, melhorar os existentes ou corrigir erros:

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/novo-padrao`)
3. Commit suas mudanças (`git commit -m 'Adiciona exemplo do padrão X'`)
4. Push para a branch (`git push origin feature/novo-padrao`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a [MIT License](https://choosealicense.com/licenses/mit/).

---

⭐ Se este repositório foi útil para você, considere dar uma estrela!
