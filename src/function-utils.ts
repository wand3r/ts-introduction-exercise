const pipe = (x, fn1, fn2) => {
  // ...
}

const price = pipe(
  "Price: 10.99",
  (str) => str.split(":")[1],
  (price) => parseFloat(price)
)

console.log(price)
