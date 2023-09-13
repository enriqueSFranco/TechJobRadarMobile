import { createContext, useState } from "react"
import type { Food, FoodName } from "../shared"

const mockFoods = [
  { name: 'pechuga', grams: '100', kilocalories: '250' },
  { name: 'pescado', grams: '200', kilocalories: '200' }
]

interface FoodProviderProps {
  children: React.ReactNode
}

export type FoodContexType = {
  allFoods: Food[]
  myFoods: Food[]
  handleSaveFood: (food: Food) => void
  handleRemoveFood: (foodName: FoodName) => void
  handleAddToMyFoods: (food: Food) => void
  handleRemoveToMyFood: (foodName: FoodName) => void
  handleSearch: () => void
}

export const FoodContext = createContext<FoodContexType | null>(null)

export function FoodProvider ({ children }: FoodProviderProps) {
  const [allFoods, updateAllFoods] = useState<Food[]>(mockFoods)
  const [myFoods, updateMyFoods] = useState<Food[]>([])

  function handleSaveFood (food: Food) {
    updateAllFoods(prevStore => [...prevStore, food])
  }

  function handleRemoveFood (foodName: FoodName) {
    updateAllFoods(prevAllFoods => {
      prevAllFoods.filter(item => item.name !== foodName.name)
      return prevAllFoods
    })
  }

  function handleAddToMyFoods (food: Food) {
    console.log('agregando: ', food, 'a mis comidas')
    updateMyFoods(prevMyFoods => {
      return [...prevMyFoods, food]
    })
  }

  function handleRemoveToMyFood (foodName: FoodName) {
    updateMyFoods(prevAllFoods => {
      prevAllFoods.filter(item => item.name !== foodName.name)
      return prevAllFoods
    })
  }

  function handleSearch () {

  }

  const data: FoodContexType = {
    allFoods,
    myFoods,
    handleSaveFood,
    handleRemoveFood,
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