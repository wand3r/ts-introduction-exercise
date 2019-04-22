const pipe = <T1, T2, R>(x: T1, fn1: (x: T1) => T2, fn2: (x: T2) => R): R => {
  return fn2(fn1(x))
}

const price = pipe(
  "Price: 10.99",
  (str) => str.split(":")[1],
  (price) => parseFloat(price)
)

console.log(price)
