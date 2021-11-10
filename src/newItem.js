const {
  decreaseQuality,
  itemExpired,
  decreaseSellIn,
} = require("./itemActions");

// New items added
const updatedNewItem = (item) => {
  decreaseSellIn(item);
  decreaseQuality(item);

  if (itemExpired(item)) {
    decreaseQuality(item);
  }
};

module.exports = { updatedNewItem };
