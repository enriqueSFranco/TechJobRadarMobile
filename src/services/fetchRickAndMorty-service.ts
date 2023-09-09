import { RickAndMorty } from "../shared"

const BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchRickAndMorty = async (): Promise<RickAndMorty> => {
  const controller = new AbortController()
  const { signal } = controller

  try {
    const url = new URL(`${BASE_URL}/character`)
    const response = await fetch(url.pathname, { signal })

    if (signal.aborted) {
      throw new Error('Solicitud cancelada')
    }

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    const data: RickAndMorty = await response.json()

    return data
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('La solicitud fue cancelada')
      } else {
        throw new Error(`Error: ${error.message}`)
      }
    }
    throw new Error('Error desconocido')
  }
}