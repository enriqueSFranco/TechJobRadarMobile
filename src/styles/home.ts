import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    paddingHorizontal: 8
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF'
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: 18
  },
})