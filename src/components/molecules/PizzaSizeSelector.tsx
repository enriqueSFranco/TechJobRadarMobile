import { FlatList, StyleSheet, Text, View } from "react-native";
import { ButtonPressable } from "../atoms/ButtonPressable";
import { PizzaSize } from "@/shared/enums.d";
import { Colors, TEXTS } from "@/shared/constants.d";

function getButtonStyles ({
  selectedPizzaSize,
  pizzaSize,
}: {
  selectedPizzaSize: PizzaSize;
  pizzaSize: PizzaSize;
}) {
  const isActive = selectedPizzaSize === pizzaSize;
  const buttonStyle = isActive ? Colors.dark.background : Colors.dark.color;
  const textStyle =
    selectedPizzaSize === pizzaSize
      ? Colors.light.background
      : Colors.light.color;
  return [buttonStyle, textStyle];
}

type PizzaSizeSelectorProps = {
  pizzaSizes: PizzaSize[];
  stateFulPizzaSize: PizzaSize;
  onSelectedPizzaSize: (pizzaSize: PizzaSize) => void;
};

export function PizzaSizeSelector ({
  pizzaSizes,
  stateFulPizzaSize,
  onSelectedPizzaSize,
}: PizzaSizeSelectorProps) {
  return (
    <View style={styles.container}>
      <Text>{TEXTS.selectSize}</Text>
      <FlatList
        data={pizzaSizes}
        renderItem={({ item }: { item: PizzaSize }) => {
          const [buttonStyle, textStyle] = getButtonStyles({
            selectedPizzaSize: item,
            pizzaSize: stateFulPizzaSize,
          });
          return (
            <ButtonPressable
              text={item}
              onPress={() => onSelectedPizzaSize(item)}
              style={[
                {
                  backgroundColor: buttonStyle,
                },
                styles.buttonStyle,
              ]}
              textStyle={{ color: textStyle }}
            />
          );
        }}
        keyExtractor={(item) => item}
        numColumns={4}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 12,
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  columnWrapper: {
    width: "100%",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
