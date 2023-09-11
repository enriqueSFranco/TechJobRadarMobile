import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { STATUS_COLOR, type Result as CharacterType, RootStackRiackAndMortyParams } from '../shared'
import { styles } from './CharacterStyles'

interface CharacterProps {
  character: CharacterType
}

type CharacterNavigationProps = NativeStackNavigationProp<RootStackRiackAndMortyParams, 'Details'>

export const Character: React.FC<CharacterProps> = ({ character }) => {
  const navigation = useNavigation<CharacterNavigationProps>()
  function handlePress () {
    navigation.navigate('Details', character)
  }

  return (
    <TouchableOpacity style={styles.characterContainer} onPress={handlePress}>
      <Image source={{ uri: character.image }} style={styles.characterImage} width={100} height={100} />
      <View style={styles.characterDetails}>
        <Text style={styles.characterName}>{character.name}</Text>
        <Text style={styles.characterInfo}>{character.species}</Text>
        <Text style={[styles.characterInfo, { color: STATUS_COLOR[character.status] }]}>{character.status}</Text>
        <View style={styles.locationInfo}>
          <Text style={styles.locationLabel}>Last known location:</Text>
          <Text style={styles.locationName}>{character.location.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}