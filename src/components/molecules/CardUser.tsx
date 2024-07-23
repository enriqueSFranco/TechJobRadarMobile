import { Text, View } from "react-native";
import { User } from "@/shared/types.d";

export const CardUser: React.FC<{ item: User }> = ({ item }) => {
  const { name, email, company, phone, address, username, website } = item;
  const { city, street } = address;
  const { name: nameCompany, catchPhrase } = company;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{username}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
      <Text>
        {city} - {street}
      </Text>
      <Text>
        {nameCompany} - {catchPhrase}
      </Text>
      <Text>{website}</Text>
    </View>
  );
};
