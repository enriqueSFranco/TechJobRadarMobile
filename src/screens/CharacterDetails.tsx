import { Image, StyleSheet, Text, View } from "react-native"
import { useRoute } from "@react-navigation/native"
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackRiackAndMortyParams } from "../shared"

export const CharacterDetails = () => {
  const { params } = useRoute<NativeStackScreenProps<RootStackRiackAndMortyParams, 'Details'>['route']>()
  const { name, gender, image, location, episode, origin, species, status } = params

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.details}>
        <Text>Statis: {status}</Text>
        <Text>Species: {species}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Origine: {origin.name}</Text>
        <Text>Location: {location.name}</Text>
        <Text>Firs episode: {episode}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150
  },
  name: {},
  details: {
    borderWidth: 1,
    borderColor: '#ccc'
  }
})