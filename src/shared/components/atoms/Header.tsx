import { Platform, StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return <View style={styles.header}>{children}</View>;
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
    paddingHorizontal: 16,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
