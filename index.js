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
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
  }
}

// FarmersMarket class
class FarmersMarket {
  constructor() {
    this.stands = [];
  }

  createStand() {
    const newStand = new Stand(this.stands.length + 1);
    this.stands.push(newStand);
    return newStand;
  }

  searchProduce(name) {
    const matches = [];

    for (const stand of this.stands) {
      const produce = stand.getProductByName(name);
      if (produce && produce.quantity > 0) {
        matches.push({
          farmer: stand.farmer?.name || "Unknown",
          standId: stand.id,
          quantity: produce.quantity,
        });
      }
    }
    return matches;
  }

  buyProduce(name, amount) {
    for (const stand of this.stands) {
      const produce = stand.getProductByName(name);
      if (produce && produce.quantity >= amount) {
        const success = produce.buy(amount);
        if (success) {
          console.log(
            `Bought ${amount} of ${name} from stand ${stand.id} by farmer ${
              stand.farmer?.name || "Unknown"
            }`
          );
          return true;
        }
      }
    }
    console.log(`Not enough ${name} available`);
  }

  listAllStands() {
    this.stands.forEach((stand) => {
      console.log(`Stand ${stand.id}: Farmer: ${stand.farmer?.name}`);
      stand.produceList.forEach((produce) => {
        console.log(`- ${produce.name}: ${produce.quantity}`);
      });
    });
  }
}

// ----- Usage Example -----

const market = new FarmersMarket();

const nancy = new Farmer("Nancy");
const mauro = new Farmer("Mauro");

const stand1 = market.createStand();
const stand2 = market.createStand();

stand1.assignFarmer(nancy);
stand2.assignFarmer(mauro);

stand1.addProduce(new Produce("Apples", 30));
stand1.addProduce(new Produce("Carrots", 50));
stand1.addProduce(new Produce("Squash", 20));
stand2.addProduce(new Produce("Tomatoes", 40));
stand2.addProduce(new Produce("Lettuce", 20));
stand2.addProduce(new Produce("Peaches", 25));

console.log("Initial Inventory:");
market.listAllStands();

console.log("\nSearching for 5 Apples, 10 Tomatoes, and 30 Peaches:");
console.log(market.searchProduce("Apples"));
console.log(market.searchProduce("Tomatoes"));
console.log(market.searchProduce("Peaches"));

market.buyProduce("Apples", 5);
market.buyProduce("Tomatoes", 10);
market.buyProduce("Peaches", 30);

console.log("\nInventory After Purchase:");
market.listAllStands();
