# OBSERVER

## WHAT IS IT?

Observer design pattern is a behavioral pattern where an object (known as the subject) maintains a list of dependents (observers) that need to be notified of any state changes. When the state of the subject changes, it notifies all its observers.

The Observer pattern is widely used in software engineering to establish a `one-to-many` dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. This pattern is particularly useful in scenarios where you have multiple objects that need to stay synchronized with the state of another object, without tightly coupling them together.

## DIFFERENT PART OF OBSERVER

Observer can be defided into two part:

`Class that contains all the observer.`

Property

- this.list=[] (commonly they use list as the data structure);

Method

- addObserver()
- removeObserver()
- notifyObservers() (the one will call update method)

`Class observer`

Method

- update()

## NOTE

When using includes method, use the want that is we ttying to find as an object of the method and the value where we want to find it as a parameter in the function
