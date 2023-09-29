import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  },
  mainContainer: { flex: 1, padding: 16, backgroundColor: '#fff' },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: 18
  },
})