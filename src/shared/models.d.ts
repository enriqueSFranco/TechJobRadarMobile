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
  grams: string
  kilocalories: string
  quantity: number
}

// NAVIGATION APP (TWEETS)
export interface AuthorTweet {
  name: string
  screenName: string,
  avatar: string
}

export interface Tweet {
  id: string
  author: AuthorTweet
  fullText: string
  retweetCount: number
  replyCount: number
  favoriteCount: number
}

// TRABAJA-YA
export interface Job {
  id: number
  company: string
  jobTitle: string
  location: string
  salaryMin: number
  salaryMax: number
  isFavorite: boolean
  application: boolean
  typeWork: string
  description: string
}
