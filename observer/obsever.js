// NOTE
/**
 *  Example of Observer design pattern that will change the
 *  whole object that accotiaed with it when the
 * temperature, humidity, and pressure are changed
 */

class Subject {
  constructor(temperature, humidity, pressure) {
    this.observers = [];
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
  }
  addObserver(name) {
    const newObserver = new Observer(name);
    this.observers.push(newObserver);
    return this;
  }
  removeObserver(name) {
    this.observers = this.observers.filter((observers) => {
      return observers.name !== name;
    });
    return this;
  }
  setProperty(temperature, humidity, pressure) {
    return this.#notifyObserver(temperature, humidity, pressure);
  }
  #notifyObserver(temperature, humidity, pressure) {
    this.observers.forEach((obsever) => {
      obsever.update(temperature, humidity, pressure);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
    this.countObserver = 0;
  }
  update(temperature, humidity, pressure) {
    console.log(
      `${this.name} is NOTIFIED ==> temperature:${temperature} humidity:${humidity} pressure:${pressure}}`
    );
  }
}
const subject1 = new Subject(12, 22, 33);
subject1.addObserver("obsever1");
subject1.addObserver("obsever2");
subject1.removeObserver("obsever1");
subject1.setProperty(33, 33, 33);
