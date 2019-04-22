import { productsArr } from "./product"

const last = <T>(xs: T[]): T | undefined => {
  return xs.length > 0 ? xs[xs.length - 1] : undefined
}

const lastNumber = last([1, 2, 3])
console.log(`lastNumber: ${lastNumber}`)
const lastString = last(["foo", "bar"])
console.log(`lastString: ${lastString}`)
const lastProduct = last(productsArr)
console.log(`lastProduct: ${JSON.stringify(lastProduct)}`)

const map = <T, R>(xs: T[], fn: (x: T) => R): R[] => {
  return xs.map(fn)
}

const powerNumbers = map([1, 2, 3], (x) => x * x)
console.log(`powerNumbers: ${powerNumbers}`)
const upperStrings = map(["foo", "bar"], (x) => x.toUpperCase())
console.log(`upperStrings: ${upperStrings}`)
const productPrices = map(productsArr, (prod) => prod.price)
console.log(`productPrices: ${productPrices}`)
