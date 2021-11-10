const { updatedBrie } = require("./agedBrie");
const { updatedPass } = require("./backstagePass");
const { updatedSulfuras } = require("./sulfuras");
const { updatedNewItem } = require("./newItem");
const { updatedConjured } = require("./conjuredItems");

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
      if (this.items[i].name === "Aged Brie") {
        updatedBrie(this.items[i]);
      } else if (
        this.items[i].name === "Backstage passes to a TAFKAL80ETC concert"
      ) {
        updatedPass(this.items[i]);
      } else if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        updatedSulfuras(this.items[i]);
      } else if (this.items[i].name.includes("Conjured")) {
        updatedConjured(this.items[i]);
      } else {
        updatedNewItem(this.items[i]);
      }
      return this.items;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
