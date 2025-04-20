// Product class
class Produce {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  buy(amount) {
    if (amount <= this.quantity) {
      this.quantity -= amount;
      return true;
    } else {
      console.log(`Not enough ${this.name} in stock`);
      return false;
    }
  }
}

// Farmer class
class Farmer {
  constructor(name) {
    this.name = name;
  }
}

// Stand class
class Stand {
  constructor(id) {
    this.id = id;
    this.farmer = null;
    this.produceList = [];
  }

  assignFarmer(farmer) {
    this.farmer = farmer;
  }

  addProduce(produce) {
    this.produceList.push(produce);
  }

  getProductByName(name) {
    return this.produceList.find(
      (p) => p.name.tolowercase() === name.tolowercase()
    );
  }
}
