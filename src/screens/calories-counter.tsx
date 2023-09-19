import { useCallback, useState } from 'react'
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import CircularProgress from 'react-native-circular-progress-indicator'
import { useFoodContext } from '../hooks'
import { CaloriesCounterMainLayout, CaloriesCounterSectionLayout } from '../layouts'
import { Food } from '../components/food'
import { calculateCalories } from '../helpers/calories-counter'

// TODO: Pasar al archivo de types
type RootStackParamList = {
  'Add Food': undefined
}

export const CaloriesCounter = () => {
  const [todayCalories, updateTodayCalories] = useState(0)
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Add Food'>>()
  const { myFoods } = useFoodContext()

  useFocusEffect(useCallback(() => {
    calculateCalories(myFoods).then(res => updateTodayCalories(res))
  }, [myFoods])
  )

  function handleAddFood () {
    navigate('Add Food')
  }
  console.log(myFoods)
  return (
    <CaloriesCounterMainLayout>
      <View style={styles.caloriesSection}>
        <Text style={styles.caloriesText}>calories</Text>
        <Pressable onPress={handleAddFood} style={styles.button}><Text style={{ color: '#fff' }}>+</Text></Pressable>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 32 }}>
        {/* grafico de calorias */}
        <CircularProgress
          value={(todayCalories * 100) / 4049.38}
          duration={1000}
          maxValue={4049.38}
          valueSuffix={'%'}
          titleStyle={{ fontWeight: '700' }}
        />
        <View style={{ flex: 1, width: '100%', gap: 8 }}>
          <Text style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: 16 }}>today</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textTransform: 'capitalize' }}>total</Text>
            <Text>{todayCalories}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textTransform: 'capitalize' }}>consumed</Text>
            <Text>535</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textTransform: 'capitalize' }}>calories</Text>
            <Text>{todayCalories}</Text>
          </View>
        </View>
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