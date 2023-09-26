import { Food, Result } from "./models"

export type Color = `#${string}`

export type TimerType = 'Pomodoro' | 'Long Break' | 'Short Break'

export type RootStackRiackAndMortyParams = {
  Home: undefined
  Details: Result
}

export type FoodName = Pick<Food, 'name'>

export type HexadecimalColor = `#${string}`
