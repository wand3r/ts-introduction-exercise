export type Character = {
  id: string
  fullName: string
  gender: "male" | "female"
  family: string
  actor: string
}

export const gotCharacters = [
  {
    id: "4569e57d-bbb3-4e75-886b-27fb4d60f672",
    fullName: "Sansa Stark",
    gender: "female",
    family: "House Stark",
    actor: "Sophie Turner"
  },
  {
    id: "5d9c4cd5-36d3-41ea-8c15-f1b5c56ffbbe",
    fullName: "Tyrion Lannister",
    gender: "male",
    family: "House Lannister",
    actor: "Peter Dinklage"
  },
  {
    id: "ab62b408-6949-4c76-a64d-2bad22875127",
    fullName: "Daenerys Targaryen",
    gender: "female",
    family: "House Targaryen",
    actor: "Emilia Clarke"
  }
]
