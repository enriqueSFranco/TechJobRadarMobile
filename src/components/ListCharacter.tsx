import { FlatList, Text, View } from "react-native"
import { Result } from "@/shared"
import { Character } from "./Character"


interface ListCharacterProps {
  data: Result[]
  loading: boolean
}

export const ListCharacter = ({ data, loading }: ListCharacterProps) => {
  if (loading) {
    return (
      <View>
        {loading && <Text>Loading...</Text>}
      </View>
    )
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Character character={item} />}
      keyExtractor={character => character.id.toString()}
    />
  )
}