const {
  decreaseQuality,
  itemExpired,
  decreaseSellIn,
} = require("./itemActions");

// Conjured item added
const updatedConjured = (item) => {
  decreaseSellIn(item);
  decreaseQuality(item);

  if (itemExpired(item)) {
    decreaseQuality(item);
  }
};

module.exports = { updatedConjured };
