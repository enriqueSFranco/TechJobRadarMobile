import { Image, StyleSheet, View } from "react-native"

type AvatarProps = {
  image: string
  size: number
}

export function Avatar ({ image, size }: AvatarProps) {
  return (
    <View style={[styles.avatarContainer, { width: size, height: size }]}>
      <Image source={{ uri: image }} style={[styles.avatarImage, { width: size, height: size }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden'
  },
  avatarImage: {
    objectFit: 'cover',
    aspectRatio: 1 / 1
  }
})