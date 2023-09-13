import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { type Food as FoodType } from '../shared'
import { Thumbnail } from '../components/Thumbnail'
import { Header } from '../components/Header'
import { Food } from '../components/Food'

// TODO: Pasar al archivo de types
type RootStackParamList = {
  'Add Food': undefined
}

const mockFoods = [
  { name: 'pechuga', grams: 100, kilocalories: 250 },
  { name: 'pescado', grams: 200, kilocalories: 200 }
]

export const CaloriesCounter = () => {
  const [stackFoods, updateStackFood] = useState<FoodType[]>(mockFoods)
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Add Food'>>()

  function handleAddFood () {
    console.log('add new food')
    navigate('Add Food')
    // const newFood: FoodType = {
    //   name: '',
    //   grams: 0,
    //   kilocalories: 0
    // }

    // updateStackFood(prevFoods => [...prevFoods, newFood])
  }

  return (
    <View>
      <Header>
        <View style={styles.nav}>
          <Text style={styles.username}>Hello, Enrique</Text>
          <Text style={styles.welcome}>Welcome back to your global</Text>
        </View>
        <Thumbnail uri='https://unavatar.io/github/enriqueSFranco' />
      </Header>
      <View style={styles.caloriesSection}>
        <View>
          <Text style={styles.caloriesText}>calories</Text>
        </View>
        <View>
          <Button title='add' onPress={handleAddFood} />
        </View>
      </View>
      <View>
        <Text style={styles.foodText}>foods</Text>
        <View>
          {stackFoods.map(food => (
            <Food key={`food-${food.name}`} food={food} />
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    gap: 4
  },
  username: {
    fontWeight: '700',
    fontSize: 16
  },
  welcome: {
    color: '#6c757d',
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