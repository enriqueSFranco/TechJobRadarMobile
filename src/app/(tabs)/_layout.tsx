import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function TabBarIcon (props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={24} {...props} />;
}

export default function TabLayout () {
  return (
    <Tabs>
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
    </Tabs>
  );
}
