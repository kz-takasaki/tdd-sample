import Money from "./money";

export default class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    return (
      super.equals(object) && object.constructor.name === this.constructor.name
    );
  }
}
