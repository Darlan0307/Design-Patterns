# Singleton

🇧🇷 [Veja em Português](./README-SINGLETON.pt-BR.md)

> (Creational Pattern)

### 😠 Problem

Suppose you want to ensure that a class has only one instance and provides a global access point to that instance. Why would someone want to control how many instances a class has? The most common reason is to control access to a shared resource.

> For example, a database connection or a cache system

### 😁 Solution

All Singleton implementations have these two steps in common:

- Make the default constructor private to prevent other objects from using the `new` operator with the singleton class.
- Create a static creation method that acts as a constructor. This method calls the private constructor under the hood to create an object and stores it in a static field. All following calls to this method return the cached object.

### 🤔 Real-world Analogy

The government is a good example of the Singleton pattern. A country can have only one official government. Regardless of the personal identities of the individuals who form governments, the title "The Government of X" is a global access point that identifies the group of people in command.

### 📝 Example

In this directory, you will find a Singleton implementation example in **src-with-pattern** and another example without using the pattern in **src-without-pattern**.

#### Advantages & Disadvantages

| Pros | Cons |
| ---- | ---- |
| You can be sure that a class has only one instance. | Violates the single responsibility principle. The pattern solves two problems at once. |
| You get a global access point to that instance. | The pattern requires special treatment in a multithreaded environment so multiple threads cannot create the singleton object more than once. |
| The singleton object is initialized only when it is requested for the first time. | It can be hard to unit test client code that uses Singleton because many testing frameworks rely on inheritance to produce mock objects. Since the singleton constructor is private and overriding static methods is impossible in most languages, you need a creative way to mock it. Or just do not write the tests. Or do not use Singleton. |

### My Opinion

For people working with legacy projects, it is common to find or need to use the Singleton pattern. Nowadays, many modern frameworks already provide better solutions for shared resources, such as dependency injection and service containers. Because of that, I would use Singleton carefully, mainly because it can create global state that is hard to test and control.
