# Decorator

🇧🇷 [Veja em Português](./README-DECORATOR.pt-BR.md)

> (Structural Pattern)

### 😠 Problem

Imagine you have a simple object, such as a coffee, and you want to add new responsibilities to it: milk, chocolate, whipped cream, discount, extra fee, and so on.

A common solution is to put several conditionals inside the original class or create many subclasses for each combination. This grows quickly and makes the code hard to maintain.

### 😁 Solution

Decorator wraps an object with another object that has the same interface.

Each decorator adds a specific behavior and forwards the rest to the original object. This lets you combine behaviors at runtime without modifying the base class.

### 🤔 Real-world Analogy

Think about clothing. You can wear a T-shirt and then add a jacket, a scarf, or a coat. Each layer adds something new, but the person remains the same.

### 📝 Example

In this directory, you will find a Decorator implementation example in **src-with-pattern** and another example without using the pattern in **src-without-pattern**.

The example uses a simple coffee and adds milk and chocolate as decorators.

#### Advantages & Disadvantages

| Pros | Cons |
| ---- | ---- |
| Adds responsibilities without changing the original class. | Too many decorator layers can make the flow harder to read. |
| Allows behaviors to be combined flexibly at runtime. | It can be more complex than a direct solution when there are only a few variations. |
| Avoids a subclass explosion to represent behavior combinations. | The order of decorators can matter in some scenarios and must be well understood. |

### My Opinion

It is very useful when you have optional and combinable behaviors. It just needs to be used carefully so a simple object creation does not become a chain that is hard to read.
