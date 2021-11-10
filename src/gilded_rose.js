const { updatedBrie } = require("./agedBrie");
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

// const regularItems = [
//   "Aged Brie",
//   "Backstage passes to a TAFKAL80ETC concert",
//   "Sulfuras, Hand of Ragnaros",
// ];

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    // for (let i = 0; i < this.items.length; i++) {
    // // Aged Brie
    // if (this.items[i].name === "Aged Brie") {
    //   decreaseSellIn(this.items[i]);
    //   increaseQuality(this.items[i]);

    //   if (itemExpired(this.items[i])) {
    //     increaseQuality(this.items[i]);
    //   }
    // }
    // // Backstage passes to a TAFKAL80ETC concert
    // if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
    //   decreaseSellIn(this.items[i]);
    //   increaseQuality(this.items[i]);

    //   if (this.items[i].sellIn <= 5 && this.items[i].quality < 50) {
    //     increaseQuality(this.items[i]);
    //   }

    //   if (this.items[i].sellIn < 5 && this.items[i].quality < 50) {
    //     increaseQuality(this.items[i]);
    //   }
    //   itemExpired(this.items[i]);
    // }
    // // New items added
    // if (!regularItems.includes(this.items[0].name)) {
    //   decreaseSellIn(this.items[0]);
    //   decreaseQuality(this.items[0]);

    //   if (itemExpired(this.items[0])) {
    //     decreaseQuality(this.items[0]);
    //   }
    // }
    // }
    this.items.forEach(updatedBrie);
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
