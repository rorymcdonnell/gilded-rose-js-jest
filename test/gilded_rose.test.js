const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

describe("Add a new item", () => {
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

describe.only("Aged Brie ", () => {
  it("should increase the quality of Aged Brie by 1 to be 21", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });
  it("should not increase the quality of aged brie over 50 even when expired (sellIn < 0)", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });
  it("should allow a maximum quality of 50 for aged brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  it("should increase quality by 2 for aged brie when it has expired", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(12);
  });
});
