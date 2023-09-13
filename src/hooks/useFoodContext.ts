import { useContext } from "react"
import { FoodContext, FoodContexType } from "../context/FoodContext"

export function useFoodContext (): FoodContexType {
  const ctx = useContext(FoodContext)

  if (ctx === null) {
    throw new Error('useFoodContext must be used within FoodProvider')
  }
  return ctx
}