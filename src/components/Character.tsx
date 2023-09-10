import { Image, StyleSheet, Text, View } from "react-native"
import { type Result as CharacterType } from "../shared"

interface CharacterProps {
  character: CharacterType
}

export const Character: React.FC<CharacterProps> = ({ character }) => {

  return (
    <View style={styles.containerCharacter}>
      <Image source={{ uri: character.image }} style={styles.characterImage} width={100} height={100} />
      <Text style={styles.characterName}>{character.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCharacter: {
  },
  characterImage: {
    width: 100,
    height: 100
  },
  characterName: {
    color: "#ccc"
  }
})