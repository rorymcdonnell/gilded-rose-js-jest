const {
  increaseQuality,
  itemExpired,
  decreaseSellIn,
} = require("./itemActions");

const updatedBrie = (item) => {
  decreaseSellIn(item);
  increaseQuality(item);

  if (itemExpired(item)) {
    increaseQuality(item);
  }
};

module.exports = { updatedBrie };
