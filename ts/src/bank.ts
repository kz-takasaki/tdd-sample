import { Money, Expression, Sum } from ".";

export default class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
