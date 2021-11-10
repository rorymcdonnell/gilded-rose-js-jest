const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

describe.only("Add a new item", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  it("should reduce sellIn by 1 to equal 9 and quality by 1 to equal 4", () => {
    const gildedRose = new Shop([new Item("foo", 15, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(6);
  });
  it("should not allow quality to go below 0 when quality is 0", () => {
    const gildedRose = new Shop([new Item("foo", 7, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("should reduce quality by 2 when sellIn < 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
});
