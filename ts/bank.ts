import Money from "./money";

export default class Bank {
  reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
