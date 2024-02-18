/**
 * this code will implement a strategy design pattern where
 * threre would be 3 price algo behaviour that will used dynamically
 * to find the cheaper company to ship an object
 */

// shipping class

class Shipping {
  constructor() {
    this.strategy = null;
    this.priceList = new Map();
    this.company = null;
  }
  get allPriceList() {
    return this.priceList;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
    this.company = strategy.company;
    return this;
  }
  countPrice(pkg) {
    if (!this.priceList.has(pkg.id)) {
      this.priceList.set(pkg.id, {
        from: pkg.from,
        to: pkg.to,
        weight: pkg.weight,
      });
    }
    const price = this.strategy.execute(pkg.weight);
    const obj = this.priceList.get(pkg.id);
    const company = this.company;
    obj[company] = price;
    return this;
  }
}

class Fedex {
  constructor() {
    this.company = "Fedex";
  }
  execute(weight) {
    return weight * 30;
  }
}
class UPS {
  constructor() {
    this.company = "UPS";
  }
  execute(weight) {
    return weight * 22;
  }
}
class USPS {
  constructor() {
    this.company = "USPS";
  }
  execute(weight) {
    return weight * 31;
  }
}

const shipping = new Shipping();
const fedex = new Fedex();
const usps = new USPS();
const ups = new UPS();
const pkg = { from: "Alabama", to: "Georgia", weight: 1.56, id: "WE334Rt442" };

shipping.setStrategy(fedex);
shipping.countPrice(pkg);

shipping.setStrategy(usps);
shipping.countPrice(pkg);

shipping.setStrategy(ups);
shipping.countPrice(pkg);
console.log(shipping.allPriceList);
