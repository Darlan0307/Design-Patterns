# Strategy

🇧🇷 [Veja em Português](./README-STRATEGY.pt-BR.md)

> (Behavioral Pattern)

### 😠 Problem

Imagine you have a rule that can be calculated in several ways, such as standard shipping, express shipping, or in-store pickup.

Without a pattern, it is common to create a method full of conditionals. Each new algorithm grows that method and forces the main class to know all the details.

### 😁 Solution

Strategy defines a family of algorithms, puts each algorithm in a separate class, and makes all of them follow the same interface.

The client uses the common interface and can swap the strategy at runtime without needing to know the details of the chosen implementation.

### 🤔 Real-world Analogy

Think about a maps application. You can choose to go by car, walking, or by bike. The destination is the same, but the strategy to calculate the route changes.

### 📝 Example

In this directory, you will find a Strategy implementation example in **src-with-pattern** and another example without using the pattern in **src-without-pattern**.

The example uses a shipping calculator with strategies for standard shipping, express shipping, and pickup.

#### Advantages & Disadvantages

| Pros | Cons |
| ---- | ---- |
| Removes large conditionals from classes that should only use the algorithm. | Can create several small classes, which may be overkill for very simple rules. |
| Makes it easy to swap the algorithm at runtime. | The client needs to know which strategy to choose, or another part of the system must decide it. |
| Helps add new algorithms without changing the class that uses the strategy. | Very similar strategies can create duplication if they are not organized well. |

### My Opinion

It is one of the most useful patterns for business rules that change often. When you see many `if` or `switch` statements choosing algorithms, Strategy is usually a good option.
