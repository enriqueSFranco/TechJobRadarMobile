import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useFoodContext } from '../hooks'
import CaloriesCounterMainLayout from '../layouts/CaloriesCounterMainLayout'
import { CaloriesCounterSectionLayout } from '../layouts/CaloriesCounterSectionLayout'
import { Food } from '../components/Food'

// TODO: Pasar al archivo de types
type RootStackParamList = {
  'Add Food': undefined
}

export const CaloriesCounter = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Add Food'>>()
  const { myFoods } = useFoodContext()

  function handleAddFood () {
    navigate('Add Food')
    // const newFood: FoodType = {
    //   name: '',
    //   grams: 0,
    //   kilocalories: 0
    // }

    // updateStackFood(prevFoods => [...prevFoods, newFood])
  }

  return (
    <CaloriesCounterMainLayout>
      <View style={styles.caloriesSection}>
        <Text style={styles.caloriesText}>calories</Text>
        <Pressable onPress={handleAddFood} style={styles.button}><Text style={{ color: '#fff' }}>+</Text></Pressable>
      </View>

      <View>
        {/* grafico de calorias */}

        {/* mas informacion sobre el consumo de calorias */}
      </View>

      <CaloriesCounterSectionLayout title='foods'>
        <FlatList
          data={myFoods}
          renderItem={({ item }) => <Food food={item} isAdded />}
          keyExtractor={item => item.name}
        />
      </CaloriesCounterSectionLayout>
    </CaloriesCounterMainLayout>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#222',
    borderRadius: 6,
    padding: 4,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  caloriesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  caloriesText: {
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'capitalize'
  },
  foodText: {
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'capitalize'
  }
})