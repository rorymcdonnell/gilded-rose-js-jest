const {
  decreaseQuality,
  increaseQuality,
  decreaseSellIn,
  itemExpired,
} = require("./itemActions");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // Aged Brie
      if (this.items[i].name === "Aged Brie") {
        decreaseSellIn(this.items[i]);
        increaseQuality(this.items[i]);

        if (itemExpired(this.items[i])) {
          increaseQuality(this.items[i]);
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
