import { StyleSheet, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Users } from "./components/pages/Users";

// El componente <View></View> es display: flex por defecto
// El componente <Button /> no se puede estilar
// Pressable, este compomente siver para crear botones personalizados
const App: React.FC = () => {
  return (
    <SafeAreaProvider style={styles.app}>
      <StatusBar style="auto" />
      <Users />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#fff",
  },
});

export default App;
