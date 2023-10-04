import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowRadius: 4,
    borderWidth: 0.5,
    borderColor: '#777',
    borderRadius: 4
  },
  dropdown: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: '#777',
    borderRadius: 4
  },
  overlay: {
    paddingHorizontal: 16,
    backgroundColor: 'red',
  }
})