import Money from "./money";
import { Franc } from "./money";

test("should return times", () => {
  const five: Money = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test("equality", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
  expect(Money.franc(5).equals(Money.franc(5))).toEqual(true);
  expect(Money.franc(5).equals(Money.franc(6))).toEqual(false);
  expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
  expect(Money.dollar(5).equals(Money.franc(5))).toEqual(false);
});

test("should return times franc", () => {
  const five: Money = Money.franc(5);
  expect(five.times(2)).toEqual(Money.franc(10));
  expect(five.times(3)).toEqual(Money.franc(15));
});

test("currency", () => {
  expect(Money.dollar(1).getCurrency()).toEqual("USD");
  expect(Money.franc(1).getCurrency()).toEqual("CHF");
});

test("different class equality", () => {
  expect(new Money(10, "CHF").equals(new Franc(10, "CHF"))).toEqual(true);
});
