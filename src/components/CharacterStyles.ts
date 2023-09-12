import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#0c0f39',
    marginVertical: 8
  },
  characterImage: {
    width: 150,
    height: 150,
  },
  characterName: {
    color: "#fff",
    fontWeight: '600',
  },
  characterDetails: {
    flexDirection: 'column',
  },
  characterInfo: {
    fontSize: 13,
    color: '#fff'
  },
  locationLabel: {},
  locationName: {},
  locationInfo: {}
})