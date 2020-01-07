const fib = require('./fib');

test('fibonacci', () => {
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  expect(fib(6)).toBe(8);
  expect(fib(7)).toBe(13);
  expect(fib(8)).toBe(21);
  expect(fib(20)).toBe(6765);
  expect(fib(30)).toBe(832040);
  expect(fib(50)).toBe(12586269025);
  expect(fib(70)).toBe(190392490709135);
  expect(fib(71)).toBe(308061521170129);
  expect(fib(72)).toBe(498454011879264);
  expect(fib(73)).toBe(806515533049393);
  expect(fib(74)).toBe(1304969544928657);
  expect(fib(75)).toBe(2111485077978050);
  expect(fib(80)).toBe(23416728348467685);
  expect(fib(90)).toBe(2880067194370816120);
  expect(fib(100)).toBe(354224848179262000000);
});
