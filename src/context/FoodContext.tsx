import { createContext, useState } from "react"
import type { Food, FoodName } from "../shared"

const mockFoods: Food[] = [
  { name: 'pechuga', grams: '100', kilocalories: '250', quantity: 1 },
  { name: 'pescado', grams: '200', kilocalories: '200', quantity: 1 }
]

interface FoodProviderProps {
  children: React.ReactNode
}

export type FoodContexType = {
  allFoods: Food[]
  myFoods: Food[]
  handleSaveFood: (food: Food) => void
  // handleRemoveFood: (foodName: FoodName) => void
  handleAddToMyFoods: (food: Food) => void
  handleRemoveToMyFood: (foodName: FoodName) => void
  handleSearch: (foodName: string) => void
}

export const FoodContext = createContext<FoodContexType | null>(null)

export function FoodProvider ({ children }: FoodProviderProps) {
  const [allFoods, updateAllFoods] = useState<Food[]>(mockFoods)
  const [myFoods, updateMyFoods] = useState<Food[]>([])

  function handleSaveFood (food: Food) {
    updateAllFoods(prevStore => [...prevStore, food])
  }

  // function handleRemoveFood (foodName: FoodName) {
  //   updateAllFoods(prevAllFoods => {
  //     const updatedFoods = prevAllFoods.filter(item => item.name !== foodName.name)
  //     return updatedFoods
  //   })
  // }

  function handleAddToMyFoods (food: Food) {
    updateMyFoods(prevMyFoods => {
      // TODO: VERIFICAR SI EXISTE EL PROPUDCTO
      const existingFoodIndex = prevMyFoods.findIndex(it => it.name === food.name)
      const foodAlreadyExists = existingFoodIndex >= 0

      if (foodAlreadyExists) {
        // sumar la cantidad en 1
        const updatedMyFoods = [...prevMyFoods]
        updatedMyFoods[existingFoodIndex].quantity += 1
        return updatedMyFoods
      }
      // agregar la nueva comida
      return [...prevMyFoods, { ...food, quantity: 1 }]
    })
  }

  function handleRemoveToMyFood (foodName: FoodName) {
    updateMyFoods(prevAllFoods => {
      const updatedFoods = prevAllFoods.filter(item => item.name !== foodName.name)
      return updatedFoods
    })
  }

  function handleSearch (foodName: string) {
    const lowerCaseFoodName = foodName.toLocaleLowerCase()
    const matchedFoods = allFoods.filter((food: Food) => {
      const lowerCaseFood = food.name.toLocaleLowerCase()
      return lowerCaseFood.includes(lowerCaseFoodName)
    })
    updateAllFoods(matchedFoods)
  }

  const data: FoodContexType = {
    allFoods,
    myFoods,
    handleSaveFood,
    // handleRemoveFood,
    handleAddToMyFoods,
    handleRemoveToMyFood,
    handleSearch
  }

  return (
    <FoodContext.Provider value={data}>
      {children}
    </FoodContext.Provider>
  )
}