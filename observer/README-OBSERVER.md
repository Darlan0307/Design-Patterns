# Observer

🇧🇷 [Veja em Português](./README-OBSERVER.pt-BR.md)

> (Behavioral Pattern)

### 😠 Problem

Imagine you have an important object in the system, such as an order, and several parts need to know when its status changes: email, SMS, push notifications, logs, admin dashboards, and so on.

Without care, the main class starts to know all these services directly. Every new notification channel requires a change in that class, even when the main order rule has not changed.

### 😁 Solution

Observer creates a relationship between a central object, called the **subject**, and a list of interested objects, called **observers**.

When the subject state changes, it automatically notifies all registered observers. This way, the subject does not need to know the details of each reaction.

### 🤔 Real-world Analogy

Think about a video channel. When a new video is published, all subscribers receive a notification. The channel does not need to manually message each person; it publishes the content and the platform notifies whoever subscribed.

### 📝 Example

In this directory, you will find an Observer implementation example in **src-with-pattern** and another example without using the pattern in **src-without-pattern**.

The example uses an order that changes status and needs to notify channels such as email and SMS.

#### Advantages & Disadvantages

| Pros | Cons |
| ---- | ---- |
| Reduces coupling between the main object and the objects that react to changes. | If there are many observers, it can become harder to understand notification order and impact. |
| Makes it easier to add new reactions without changing the main class. | Automatic notifications can hide side effects if the flow is not well documented. |
| Helps when several parts of the system need to react to the same event or state change. | In large systems, error handling may be needed so one observer does not break the others. |

### My Opinion

It is a very useful pattern for events, notifications, and flows where several points of the system need to react to a change. It is just important not to overuse it: if everything becomes an event, the system flow can become hard to follow.
