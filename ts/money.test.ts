import { Dollar } from "./money";
test("should return times", () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
});
