import Money from "./money";

export default class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    return (
      super.equals(object) && object.constructor.name === this.constructor.name
    );
  }
}
