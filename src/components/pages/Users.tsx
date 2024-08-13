import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CardUser } from "../molecules/CardUser";
import { User } from "@/shared/types.d";
import { getUsers } from "@/lib/users";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getUsers().then((resUsers) => {
      setUsers(resUsers);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {users.length === 0 ? (
        <ActivityIndicator /> // indicador de carga
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => <CardUser item={item} />}
          keyExtractor={(item) => item.email}
        />
      )}
    </View>
  );
};
