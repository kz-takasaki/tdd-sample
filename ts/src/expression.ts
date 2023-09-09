import { Bank, Money } from ".";

export default interface Expression {
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}
