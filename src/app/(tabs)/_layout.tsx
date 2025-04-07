import { Tabs } from "expo-router";

// archivo de diseño principal para la barra de pestañas `tabs`
// podemos controlar como se ven y se comporta la barra de tabs y cada boton de la barra de tabs
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
      {/* para la tab que tiene en nombre del archivo `index` cambiale el nombre a `home` */}
      {/* al poner href = null estamos eliminando la pestaña index de la barra de tabs, es decir, la opcion `home` no se mostrara en la barra de tabs */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          // href: null,
        }}
      />

      {/* para la tab que tiene en nombre del archivo `audio` cambiale el nombre a `Audio` */}
      <Tabs.Screen name="audio" options={{ title: "Audio" }} />

      {/* tab dinamica */}
      <Tabs.Screen
        name="[user]"
        options={{
          // href: '/kirto', -> Ensure the tab always links to the same href.

          // OR you can use the href object.
          href: {
            pathname: "/[user]",
            params: {
              user: "kirito",
            },
          },
        }}
      />
    </Tabs>
  );
}
