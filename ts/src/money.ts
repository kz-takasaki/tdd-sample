import { Expression, Sum } from ".";

export default class Money implements Expression {
  amount: number;
  currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
  plus(addend: Money): Sum {
    return new Sum(this, addend);
  }
  reduce(to: string): Money {
    return this;
  }
  getCurrency(): string {
    return this.currency;
  }
  equals(object: Object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount && this.getCurrency() === money.getCurrency()
    );
  }
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
