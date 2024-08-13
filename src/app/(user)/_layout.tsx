import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/shared/constants.d";

function TabBarIcon (props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={24} {...props} />;
}

export default function TabLayout () {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarInactiveBackgroundColor: Colors.light.color,
        tabBarStyle: {
          backgroundColor: Colors.dark.background,
        },
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="restaurant" color={color} />
          ),
        }}
      />

      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="orders"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-alt" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
