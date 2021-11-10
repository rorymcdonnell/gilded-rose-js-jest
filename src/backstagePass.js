const {
  increaseQuality,
  itemExpired,
  decreaseSellIn,
} = require("./itemActions");

// Backstage passes to a TAFKAL80ETC concert
const updatedPass = (item) => {
  decreaseSellIn(item);
  increaseQuality(item);

  if (item.sellIn <= 5 && item.quality < 50) {
    increaseQuality(item);
  }

  if (item.sellIn < 5 && item.quality < 50) {
    increaseQuality(item);
  }
  itemExpired(item);
};

module.exports = { updatedPass };
