const fibonacci = require('../fibonacci-matrix');


test('fibonacci: iterative', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(6)).toBe(8);
  expect(fibonacci(7)).toBe(13);
  expect(fibonacci(8)).toBe(21);
  expect(fibonacci(20)).toBe(6765);
  expect(fibonacci(30)).toBe(832040);
  expect(fibonacci(50)).toBe(12586269025);
  expect(fibonacci(70)).toBe(190392490709135);
  expect(fibonacci(71)).toBe(308061521170129);
  expect(fibonacci(72)).toBe(498454011879264);
  expect(fibonacci(73)).toBe(806515533049393);
  expect(fibonacci(74)).toBe(1304969544928657);
  expect(fibonacci(75)).toBe(2111485077978050);
//   expect(fibonacci(80)).toBe(23416728348467685);
//   expect(fibonacci(90)).toBe(2880067194370816120);
//   expect(fibonacci(100)).toBe(354224848179262000000);
});
