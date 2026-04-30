# Factory

🇧🇷 [Veja em Português](./README-FACTORY.pt-BR.md)

> (Creational Pattern)

### 😠 Problem

Imagine you need to create different objects depending on a system decision. For example: sending a notification by email, SMS, or another channel.

If this decision is spread across the code, several places start to have conditionals and instantiate classes directly. When a new type appears, you need to change many parts of the system.

### 😁 Solution

Factory centralizes object creation in a specialized method or class.

Instead of the client deciding directly which class to instantiate, it asks the factory to create the correct object. This keeps creation logic in a clear place that is easier to maintain.

### 🤔 Real-world Analogy

Think about a pizza shop. You order pepperoni, Portuguese, or margherita pizza, but you do not assemble it manually. The kitchen knows which ingredients to use and delivers the final product.

### 📝 Example

In this directory, you will find a Factory implementation example in **src-with-pattern** and another example without using the pattern in **src-without-pattern**.

The example uses a factory to create email and SMS notifiers.

#### Advantages & Disadvantages

| Pros | Cons |
| ---- | ---- |
| Centralizes object creation and avoids scattered decision logic. | Can add an extra layer in cases where creation is too simple. |
| Makes it easier to add new object types with less impact on client code. | The factory can grow too much if it starts concentrating many different rules. |
| Helps the client depend on abstractions instead of concrete classes. | Depending on the chosen approach, the factory still needs to change when a new type is added. |

### My Opinion

It is one of the easiest patterns to apply in daily work. It is very useful when object creation starts to have rules, different types, or repeated conditionals.
