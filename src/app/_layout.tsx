import { StatusBar } from "expo-status-bar";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
  useAnimatedValue,
  Animated,
  Dimensions,
} from "react-native";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { TextField } from "@/shared/components/atoms/TextField";
import theme from "@/styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
// import { RoleSearchTrigger } from "@/components/SearchInputField/RoleSearchTrigger";
import { JobCard } from "@/features/jobs/components/JobCard";
import mockJobListings from "@/mock/mockJobListings.json"

const listing = mockJobListings.jobListings[0]
const screenHeight = Dimensions.get("window").height;

export default function RootLayout() {
  const [isMenuVisible, updateIsMenuVisible] = useState(false);
  const [form, setForm] = useState({
    keyword: "",
    location: "",
  });
  const slideAnim = useAnimatedValue(-screenHeight);

  function showMenu() {
    updateIsMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }

  function hideMenu() {
    Animated.timing(slideAnim, {
      toValue: -screenHeight,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      updateIsMenuVisible(false);
    });
  }

  function handleChangeText({ name, value }: { name: string; value: string }) {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function onSearch() {
    const { keyword, location } = form;

    if (keyword.trim() === "" || location.trim() === "") return;

    // TODO: Realizar la busqueda
  }

  return (
    // <JobCard listing={mockJobListing} />
    <SafeAreaView style={{backgroundColor: theme.colors.background, flex: 1}}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.fontSize.xl,
          fontWeight: theme.typography.fontWeight.bold,
          textAlign: "center",
        }}
      >
        Descubre la chamba perfecta para ti
      </Text>
      <Pressable style={styles.pressableInput} onPress={showMenu}>
        <Svg
          // xmlns="http://www.w3.org/2000/svg"
          fill={theme.colors.text}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{}}
          // class="absolute left-2 top-1/2 -translate-y-1/2 xs:left-4 sm:left-2 transition-all fill-brightBlue-700"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 11.0999C2 5.73669 6.47535 2 11.6625 2V4C7.39975 4 4 7.01321 4 11.0999C4 12.436 4.47513 13.6386 5.32895 14.5038C6.17642 15.3626 7.45744 15.95 9.18745 15.95C11.0721 15.95 12.5798 15.0154 13.6451 13.7148C14.7288 12.3915 15.275 10.7819 15.275 9.63746C15.275 8.22682 14.7491 7.42935 14.1529 7.01017C13.5239 6.56788 12.6862 6.45347 11.9302 6.66348L11.3949 4.73644C12.6639 4.38394 14.1323 4.55078 15.3033 5.37412C16.5071 6.22056 17.275 7.67309 17.275 9.63746C17.275 11.1616 16.6508 13.0017 15.5247 14.5513L21.6803 20.2672L20.3194 21.7328L14.18 16.0319C12.8965 17.1583 11.2163 17.95 9.18745 17.95C6.98 17.95 5.16728 17.1873 3.9054 15.9086C2.64986 14.6363 2 12.9139 2 11.0999Z"
          ></Path>
        </Svg>
        <Text style={{ color: theme.colors.text }}>
          Dinos el puesto que te late
        </Text>
      </Pressable>
      <View>
        <Text>Registrarse</Text>
        <Text>iniciar sesión</Text>
      </View>
      {isMenuVisible && (
        <Animated.View
          style={[styles.menu, { transform: [{ translateY: slideAnim }] }]}
        >
          <SafeAreaView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: theme.typography.fontWeight.bold,
                  color: "#fff",
                  textTransform: "capitalize",
                }}
              >
                buscar
              </Text>
              <Pressable onPress={hideMenu}>
                <Svg
                  // xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // class="transition-colors fill-blueCorp-400 group-active:fill-blueCorp-500 animate-[rotate180deg_0.7s]"
                >
                  <Path
                    id="Union"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2742 13.7203C13.3338 14.8542 14.2386 15.8574 14.9983 16.7227C16.1133 17.9925 16.916 18.9652 17.4377 19.6173C17.6985 19.9433 17.8891 20.1892 18.0134 20.3521C18.0755 20.4335 18.121 20.4942 18.1505 20.5337L18.1827 20.5771L18.1898 20.5869L18.1912 20.5887L18.1912 20.5888C18.1911 20.5887 18.191 20.5886 18.9998 20.0004C19.8085 19.4122 19.8084 19.4121 19.8083 19.4119L19.8079 19.4114L19.8069 19.4101L19.8039 19.4059L19.7933 19.3915L19.7543 19.3389C19.7203 19.2932 19.6702 19.2264 19.6034 19.1389C19.4698 18.9639 19.2698 18.7059 18.9994 18.3679C18.4586 17.6919 17.6363 16.6958 16.5012 15.4031C15.695 14.4849 14.731 13.4171 13.5981 12.208C14.0329 11.7181 14.4569 11.2466 14.8647 10.7981C16.1073 9.43123 17.1945 8.28188 17.9706 7.47475C18.3586 7.07126 18.6686 6.75348 18.8812 6.53704C18.9875 6.42882 19.0694 6.34594 19.1245 6.29037L19.1867 6.22772L19.2022 6.21222L19.2059 6.2085L19.2067 6.20766L19.2069 6.20749L18.4998 5.50039C17.7927 4.79328 17.7926 4.79336 17.7925 4.79346L17.7922 4.79381L17.7909 4.79502L17.7865 4.79949L17.7695 4.81651L17.7042 4.88229C17.647 4.93999 17.5629 5.02509 17.4543 5.13562C17.2372 5.35667 16.9222 5.67952 16.529 6.08853C15.7425 6.9064 14.6423 8.06955 13.3848 9.45272C13.0084 9.86677 12.6175 10.301 12.2164 10.752C10.4064 8.86767 8.24138 6.7006 5.68853 4.27539L4.31104 5.72539C6.89791 8.18292 9.07995 10.3701 10.8923 12.2607C8.97114 14.4801 6.9311 16.9761 5.18605 19.4192L6.81352 20.5816C8.47441 18.2564 10.4202 15.8684 12.2742 13.7203Z"
                  ></Path>
                </Svg>
              </Pressable>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{
                justifyContent: "flex-end",
                gap: 16,
              }}
            >
              <TextField
                label="¿Cuál es tu siguiente reto?"
                placeholder="Algo como Desarrollador Web"
                autoFocus
                autoCapitalize="none"
                // keyboardType="email-address"
                value={form.keyword}
                onChangeText={(newText) =>
                  handleChangeText({ name: "keyword", value: newText })
                }
                onPress={showMenu}
              />
              <TextField
                label="¿Dónde empieza tu nueva historia?"
                placeholder="Ciudad de México, desde casa o en oficina"
                value={form.location}
                onChangeText={(newText) =>
                  handleChangeText({ name: "location", value: newText })
                }
              />
            </KeyboardAvoidingView>
          </SafeAreaView>
        </Animated.View>
      )}
      <StatusBar style="light" />
      <JobCard listing={listing} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pressableInput: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: theme.colors.border,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.borderRadius.sm,
    gap: 4,
  },
  menu: {
    position: "absolute",
    inset: 0,
    height: screenHeight,
    backgroundColor: theme.colors.background,
    zIndex: 10,
  },
});
