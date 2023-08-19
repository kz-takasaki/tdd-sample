export default abstract class Money {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  abstract times(multiplier: number): Money;
  getCurrency(): string {
    return this.currency;
  }
  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this.amount === money.amount;
  }
  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }
  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}

class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    return (
      super.equals(object) && object.constructor.name === this.constructor.name
    );
  }
}

class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    return (
      super.equals(object) && object.constructor.name === this.constructor.name
    );
  }
}
