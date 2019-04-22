import { productsDict } from "./product"

const values = <T>(obj: { [x: string]: T }): T[] => {
  return Object.values(obj)
}

const numbers = values({ id1: 1, id2: 4 })
console.log(`numbers: ${numbers}`)
const strings = values({ name1: "foo", name2: "bar" })
console.log(`strings: ${strings}`)
const products = values(productsDict)
console.log(`products: ${products.map((x) => JSON.stringify(x))}`)
