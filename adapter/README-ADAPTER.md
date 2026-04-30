# Adapter

🇧🇷 [Veja em Português](./README-ADAPTER.pt-BR.md)

> (Structural Pattern)

### 😠 Problem

- You need to integrate an existing class that is not compatible with the design used by your code.
- You want to reuse several subclasses that do not share some common functionality and cannot add that functionality to the superclass.
- You need to integrate third-party libraries or components without modifying their original source code.

### 😁 Solution

Adapter wraps an object from one class, called the adaptee, and exposes an interface expected by clients. The Adapter translates method calls from the expected interface into calls that are compatible with the original object.

### 🤔 Real-world Analogy

When you travel from Brazil to Europe for the first time, you may be surprised when trying to charge your laptop. Plugs and outlet standards are different across countries. That is why a Brazilian plug will not fit into a German outlet. The problem can be solved with a plug adapter that has the Brazilian outlet style and the European plug style.

### 📝 Example

In this directory, you will find an Adapter implementation example in **src-with-pattern** and another example without using the pattern in **src-without-pattern**.

The example uses two different libraries to generate PDFs. With Adapter, the report generator depends on a common contract instead of depending directly on a specific library.

#### Advantages & Disadvantages

| Pros | Cons |
| ---- | ---- |
| Single responsibility principle. You can separate interface or data conversion from the main business logic of the program. | The overall code complexity increases because you need to introduce a new set of interfaces and classes. Sometimes it is simpler to change the service class so it fits the rest of your code. |
| Open/closed principle. You can introduce new types of adapters without breaking existing client code, as long as clients work through the expected interface. | |

### My Opinion

It is a very common pattern when working with external libraries, third-party APIs, or legacy systems. It helps protect the rest of the code from the changes and details of those integrations.
