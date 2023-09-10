import { fetcher } from "../helpers/fetcher-util"
import { RickAndMorty } from "../shared"

const BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchRickAndMorty = async (): Promise<RickAndMorty> => {
  try {
    const data: RickAndMorty = await fetcher(`${BASE_URL}/character`)

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    }
    return Promise.reject(error)
  }
}