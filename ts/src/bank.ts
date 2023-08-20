import { Money, Expression } from ".";

export default class Bank {
  private rates = new Map<string, number>();
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
  addRate(from: string, to: string, rate: number) {
    this.rates.set(from + to, rate);
  }
  getRate(from: string, to: string): number {
    if (from === to) return 1;
    return this.rates.get(from + to)!; // キーをfrom + toとしている
  }
}
