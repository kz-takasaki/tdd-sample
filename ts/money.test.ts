import Money from "./money";

test("should return times", () => {
  const five: Money = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test("equality", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
  expect(Money.dollar(5).equals(Money.franc(5))).toEqual(false);
});

test("currency", () => {
  expect(Money.dollar(1).getCurrency()).toEqual("USD");
  expect(Money.franc(1).getCurrency()).toEqual("CHF");
});
