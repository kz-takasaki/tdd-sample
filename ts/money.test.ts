import { Dollar } from "./money";
test("should return times", () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(product.amount).toEqual(10);
  product = five.times(3);
  expect(product.amount).toEqual(15);
});
