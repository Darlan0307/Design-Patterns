# Design Patterns in Practice

🇧🇷 [Veja em Português](./README.pt-BR.md)

A repository with practical implementations and clear examples of the main design patterns in object-oriented programming.

## 📋 About the Project

This repository provides implementation examples for different design patterns, showing situations where they can be applied. The examples are organized in a simple way, making learning and quick reference easier for developers at different experience levels.

> The examples in this project are focused on teaching. The goal is not to represent a robust production architecture, but to explain each pattern in a simple way so the idea becomes easier to apply in real scenarios.

---

## 🧩 Included Patterns

> In development

### Creational Patterns

- **[Singleton](./singleton/README-SINGLETON.md)**: Ensures that a class has only one instance
- **[Factory](./factory/README-FACTORY.md)**: Centralizes object creation in a factory

<!--
- **Abstract Factory**: Creates families of related objects
- **Builder**: Builds complex objects step by step
- **Prototype**: Creates new objects by cloning existing ones -->

### Structural Patterns

- **[Adapter](./adapter/README-ADAPTER.md)**: Connects incompatible interfaces
- **[Decorator](./decorator/README-DECORATOR.md)**: Adds responsibilities to an object dynamically

<!-- - **Bridge**: Separates abstraction from implementation
- **Composite**: Composes objects into tree structures
- **Facade**: Provides a simplified interface to a set of interfaces -->

### Behavioral Patterns

- **[Observer](./observer/README-OBSERVER.md)**: Automatically notifies observers when an object changes
- **[Strategy](./strategy/README-STRATEGY.md)**: Swaps algorithms at runtime through a common interface

---

<!-- - **Command**: Encapsulates requests as objects
- **Iterator**: Accesses collection elements sequentially
- **State**: Changes behavior when internal state changes -->

## 🧭 When to Use Each Pattern

| Pattern | When to use |
| ------- | ----------- |
| **[Observer](./observer/README-OBSERVER.md)** | When several parts of the system need to react to changes, such as events, webhooks, notifications, or state changes. |
| **[Factory](./factory/README-FACTORY.md)** | When object creation starts to become complex, such as in APIs, frameworks, integrations, or objects with construction rules. |
| **[Singleton](./singleton/README-SINGLETON.md)** | When it makes sense to have a single shared instance, such as a connection pool, global configuration, or cache. Use it carefully because of global state. |
| **[Decorator](./decorator/README-DECORATOR.md)** | When you want to add behavior without changing the original object, such as in middlewares, interceptors, logs, validations, or optional extensions. |
| **[Strategy](./strategy/README-STRATEGY.md)** | When you need to swap algorithms or rules at runtime, such as validation, sorting, authentication, shipping calculation, or discount rules. |
| **[Adapter](./adapter/README-ADAPTER.md)** | When you need to connect incompatible interfaces, such as external APIs, legacy systems, or library migrations. |

## 🔎 References and Inspirations

This project was created using practical and accessible Design Patterns content as reference and inspiration:

- [Os 6 Design Patterns mais usados - Arthur Takeda](https://youtu.be/G-O90vR7SCU?si=flqiD-JxO6Tk7mPf)
- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
- [Refactoring Guru - Design Patterns em Português](https://refactoring.guru/pt-br/design-patterns)

## 🤝 Contributions

Contributions are welcome! If you want to add new examples, improve existing ones, or fix errors:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-pattern`)
3. Commit your changes (`git commit -m 'Add pattern X example'`)
4. Push to the branch (`git push origin feature/new-pattern`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

⭐ If this repository was useful to you, consider giving it a star!
