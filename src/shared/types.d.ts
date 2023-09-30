import { Food, Result } from "./models"

export type TimerType = 'Pomodoro' | 'Long Break' | 'Short Break'

export type RootStackRiackAndMortyParams = {
  Home: undefined
  Details: Result
}

export type FoodName = Pick<Food, 'name'>

type HexadecimalColor = `#${string}`

type KnowledgeColor = {
  backgroundColor: HexadecimalColor
  color: HexadecimalColor
}

export { HexadecimalColor, KnowledgeColor }
