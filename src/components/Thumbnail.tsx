import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface ThumbnailProps {
  uri: string
}

export const Thumbnail = ({ uri }: ThumbnailProps) => {
  return (
    <View>
      <Image source={{ uri }} style={styles.thumbnail} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 50,
    objectFit: 'cover'
  }
})