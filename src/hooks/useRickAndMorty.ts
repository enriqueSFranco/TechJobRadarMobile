import { useEffect, useState } from "react"
import { RickAndMorty } from "../shared"
import { fetchRickAndMorty } from "../services/fetchRickAndMorty-service"

export const useRickAndMorty = () => {
  const [data, setData] = useState<RickAndMorty | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, updatedIsLoading] = useState<boolean>(false)

  useEffect(() => {
    updatedIsLoading(true)
    fetchRickAndMorty()
      .then(response => {
        setData(response)
      })
      .catch(error => {
        if (error instanceof Error) {
          setError(error)
        }
      }).finally(() => updatedIsLoading(false))
  }, [])

  return { data, error, isLoading }
}
