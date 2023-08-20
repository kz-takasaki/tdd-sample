import { Bank, Money } from ".";

export default interface Expression {
  reduce(bank: Bank, to: string): Money;
}
