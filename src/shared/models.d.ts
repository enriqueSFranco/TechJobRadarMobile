import { Color } from './types.d'

export interface Colors {
  PURPLE: Color,
  FIUSHA: Color,
  PINK: Color
}

// RICK AND MORTY
export interface RickAndMorty {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Result {
  id: number
  name: string
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string
  url: string
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

// calories counter
export interface Food {
  name: string
  grams: number
  kilocalories: number
}