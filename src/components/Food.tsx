import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFoodContext } from '../hooks'
import { type Food as FoodType } from '../shared'

interface FoodProps {
  food: FoodType
  isAdded?: boolean
}

export const Food = ({ food, isAdded = false }: FoodProps) => {
  const { handleRemoveFood, handleAddToMyFoods } = useFoodContext()

  const { name, grams, kilocalories } = food

  const removeFoodHandler = (food: FoodType) => () => handleRemoveFood(food)
  const addToMyFoodsHandler = (food: FoodType) => () => handleAddToMyFoods(food)


  const icon = isAdded ? (
    <TouchableOpacity onPress={removeFoodHandler(food)}>
      <Text>x</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={addToMyFoodsHandler(food)}>
      <Text>+</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>{name}</Text>
        <Text>{grams}gr</Text>
      </View>
      <View style={styles.nutritionInfoContainer}>
        {icon}
        <Text>{kilocalories}kcal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#dee2e6',
    padding: 16,
    marginBottom: 16,
    borderRadius: 4
  },
  infoContainer: {
    alignItems: 'flex-start',
    gap: 4
  },
  nutritionInfoContainer: {
    alignItems: 'center',
    gap: 4
  }
})