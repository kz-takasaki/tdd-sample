export default class Money implements Expression {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
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
