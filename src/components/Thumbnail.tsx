import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface ThumbnailProps {
  uri: string;
  size?: number;
}

export const Thumbnail = ({ uri, size = 50 }: ThumbnailProps) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={{ uri }}
        style={[styles.thumbnail, { width: size, height: size }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 50,
  },
  thumbnail: {
    objectFit: "cover",
  },
});
