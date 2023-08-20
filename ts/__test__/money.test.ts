import { Money, Bank, Expression, Sum } from "../src";

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

test("simple addition", () => {
  const five: Money = Money.dollar(5);
  const sum: Expression = five.plus(five);
  const bank: Bank = new Bank();
  const reduced: Money = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.dollar(10));
});

test("plus return s sum", () => {
  const five: Money = Money.dollar(5);
  const result: Expression = five.plus(five);
  const sum: Sum = result as Sum;
  expect(sum.augend).toEqual(five);
  expect(sum.addend).toEqual(five);
});

test("should reduce sum", () => {
  const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(7));
});

test("should reduce money", () => {
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(Money.dollar(1), "USD");
  expect(result).toEqual(Money.dollar(1));
});
