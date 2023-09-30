import { Image, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRickAndMorty } from '../hooks/useRickAndMorty'
import { ListCharacter } from '../components/list-character'
import { FormSearch } from '../components/ui/form-search'

export const RickAndMortyApp = () => {
  const { data, isLoading } = useRickAndMorty()

  return (
    <View style={styles.containerApp}>
      <View style={{ maxHeight: 150 }}>
        <LinearGradient
          colors={['rgb(187, 247, 208)', 'rgb(187, 247, 208)', 'rgb(34, 197, 94))']}
          style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <Image source={require('../assets/Rick-And-Morty.png')} style={{ objectFit: 'cover', width: '100%', height: 150 }} />
      </View>
      <View style={{ flex: 1, margin: 10, gap: 8 }}>
        <FormSearch />
        <Text style={{ color: '#01aeca', fontSize: 22, fontWeight: '600', textTransform: 'capitalize' }}>characters</Text>
        {data && <ListCharacter data={data.results} loading={isLoading} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    gap: 8,
  }
})