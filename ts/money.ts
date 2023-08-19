export default abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  abstract times(multiplier: number): Money;
  equals(object: Object): boolean {
    const money: Money = object as Money;
    return this.amount === money.amount;
  }
  static dollar(amount: number): Money {
    return new Dollar(amount);
  }
  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    return (
      super.equals(object) && object.constructor.name === this.constructor.name
    );
  }
}

class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    return (
      super.equals(object) && object.constructor.name === this.constructor.name
    );
  }
}
