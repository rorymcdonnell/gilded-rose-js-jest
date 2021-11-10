const decreaseQuality = (item) => {
  if (item.quality > 0 && item.quality < 80) {
    item.quality -= 1;
  }
};

const increaseQuality = (item) => {
  if (item.quality < 50) {
    item.quality += 1;
  }
};

const decreaseSellIn = (item) => {
  if (item.name !== "Sulfuras, Hand of Ragnaros") {
    item.sellIn -= 1;
  }
};

const itemExpired = (item) => {
  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    if (item.sellIn < 0) {
      item.quality = 0;
      return true;
    }
  }
  if (item.sellIn < 0) {
    return true;
  }
};

module.exports = {
  decreaseQuality,
  increaseQuality,
  decreaseSellIn,
  itemExpired,
};
