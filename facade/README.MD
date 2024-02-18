# FACADE

## WHAT IS IT?

The facade design pattern is a structural design pattern that provides a unified interface to a set of interfaces in a subsystem. It encapsulates a complex subsystem behind a simpler interface, making it easier to use and reducing dependencies between clients and the subsystem's components.

## EXAMPLE CODE

```javascript
// this is a example code before using a faced

// Complex subsystems
class Subsystem1 {
  operation1() {
    return "Subsystem1: Ready!\n";
  }
}

class Subsystem2 {
  operation2() {
    return "Subsystem2: Go!\n";
  }
}

// Client
function clientCode() {
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();

  // Client code interacts with subsystems directly
  const result = `Client code initializes subsystems:\n${subsystem1.operation1()}${subsystem2.operation2()}`;
  console.log(result);
}

clientCode();
```

```javascript
// Facade
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  // Facade provides a simplified interface to the subsystems bind 2 complexes system
  operate() {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation2();
    return result;
  }
}

// Client function
function clientCode(facade) {
  console.log(facade.operate());
}

const facade = new Facade();
clientCode(facade);
```

## NOTE

When using includes method, use the want that is we ttying to find as an object of the method and the value where we want to find it as a parameter in the function
