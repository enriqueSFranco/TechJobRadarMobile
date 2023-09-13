import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { type Food as FoodType } from '../shared'

interface FoodProps {
  food: FoodType
}

export const Food = ({ food }: FoodProps) => {
  const { name, grams, kilocalories } = food
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>{name}</Text>
        <Text>{grams}gr</Text>
      </View>
      <View style={styles.nutritionInfoContainer}>
        <TouchableOpacity><Text>x</Text></TouchableOpacity>
        <Text>{kilocalories}kcal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#b5e48c',
    padding: 16,
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