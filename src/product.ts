export type Product = {
  id: number
  name: string
  price: number
}

export const productsArr: Product[] = [
  { id: 1, name: "table", price: 100 },
  { id: 2, name: "desk", price: 150 }
]

export const productsDict: { [id: string]: Product } = {
  "1": { id: 1, name: "table", price: 100 },
  "2": { id: 2, name: "desk", price: 150 }
}
