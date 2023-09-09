import { Bank, Expression, Sum } from ".";

export default class Money implements Expression {
  amount: number;
  currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }
  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }
  reduce(bank: Bank, to: string): Money {
    const rate = bank.getRate(this.currency, to);
    return new Money(this.amount / rate, to);
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
