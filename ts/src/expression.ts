import { Money } from ".";

export default interface Expression {
  reduce(to: string): Money;
}
