import { productsArr } from "./product"
import { gotCharacters } from "./character"

const arrayToDictionary = <T extends { id: string }>(
  xs: T[]
): { [id: string]: T } => {
  return xs.reduce(
    (acc, x) => {
      acc[x.id] = x
      return acc
    },
    {} as { [id: string]: T }
  )
}

const products = arrayToDictionary(productsArr)
console.log(`Product name: ${products["1"].name}`)
console.log(`Product name: ${products["1"].price}`)
console.log(JSON.stringify(products, null, 2))

const characters = arrayToDictionary(gotCharacters)
console.log(
  `Name: ${characters["5d9c4cd5-36d3-41ea-8c15-f1b5c56ffbbe"].fullName}`
)
console.log(JSON.stringify(characters, null, 2))
