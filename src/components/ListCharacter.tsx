import { FlatList } from "react-native"
import { Result } from "@/shared"
import { Character } from "./Character"


interface ListCharacterProps {
  data: Result[]
}

export const ListCharacter = ({ data }: ListCharacterProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Character character={item} />}
      keyExtractor={character => character.id.toString()}
    />
  )
}