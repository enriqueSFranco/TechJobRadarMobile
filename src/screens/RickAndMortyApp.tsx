import { useRickAndMorty } from '../hooks/useRickAndMorty'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Character } from '../components/Character'

export const RickAndMortyApp = () => {
  const { data, isLoading } = useRickAndMorty()

  return (
    <View style={styles.containerApp}>
      <Text>Rick and Morty</Text>
      {isLoading && <Text>Loading...</Text>}
      <View>
        {data && (
          <FlatList
            data={data.results}
            renderItem={({ item }) => <Character character={item} />}
            keyExtractor={character => character.id.toString()}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: "#222",
  }
})