import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { RickAndMorty } from '../shared'
import { fetchRickAndMorty } from '../services/fetchRickAndMorty-service'

export const NasaApp = () => {
  const [data, setData] = useState<RickAndMorty | null>(null)
  const [loading, updatedLoading] = useState<boolean>(false)

  // TODO: Pasar a un custom hook
  useEffect(() => {
    updatedLoading(true)
    fetchRickAndMorty()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }).finally(() => updatedLoading(false))
  }, [])

  return (
    <View>
      <Text>Rick and Morty</Text>
      {loading && <Text>Loading...</Text>}
    </View>
  )
}