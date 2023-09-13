import { FoodContext } from "../context/FoodContext"
import { useContext } from "react"

export function useFoodContext () {
  const ctx = useContext(FoodContext)

  if (ctx === undefined) {
    throw new Error('useFoodContext must be used within FoodProvider')
  }
  return ctx
}