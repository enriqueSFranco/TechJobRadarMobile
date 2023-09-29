import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  jobText: {
    textTransform: 'capitalize',
    fontWeight: '700',
    color: '#222'
  },
  jobDetail: {
    flexGrow: 1,
    justifyContent: 'space-between',
    gap: 8
  },
  jobFooter: {
    gap: 8,
  },
  row: { flexDirection: 'row' }
})