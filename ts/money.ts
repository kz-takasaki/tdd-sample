export default class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  equals(object: Object): boolean {
    const money = object as Money;
    return this.amount === money.amount;
  }
}