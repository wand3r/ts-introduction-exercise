import { productsDict } from "./product"

const values = (obj) => {
  // ...
}

const numbers = values({ id1: 1, id2: 4 })
console.log(`numbers: ${numbers}`)
const strings = values({ name1: "", name2: "" })
console.log(`strings: ${strings}`)
const products = values(productsDict)
console.log(`products: ${products.map((x) => JSON.stringify(x))}`)
