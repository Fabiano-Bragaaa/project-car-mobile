import { DimensionValue, Image, Pressable, Text, View } from "react-native";
import { PropsCar } from "../../types/car";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Props } from "@routes/index";

type PropsData = {
  data: PropsCar;
  widthScreen: DimensionValue;
  enableRemove?: boolean;
  removeItem?: () => Promise<void>;
};

export function CarList({
  data,
  widthScreen,
  enableRemove = false,
  removeItem,
}: PropsData) {
  const navigation = useNavigation<NativeStackNavigationProp<Props>>();
  function handleNavigate() {
    navigation.navigate("detail", { id: data.id });
  }

  async function handleRemove() {
    if (!removeItem) {
      return;
    }

    await removeItem();
  }

  return (
    <Pressable
      onPress={handleNavigate}
      onLongPress={enableRemove ? handleRemove : () => {}}
      style={{ width: widthScreen }}
      className="w-full bg-white p-1 rounded-md mb-3"
    >
      <Image
        resizeMode="cover"
        source={{ uri: data.images[0].url }}
        className="w-full h-36 mb-2 rounded-md"
      />
      <Text className="font-bold text mb-1">{data.name}</Text>
      <Text className="mb-1 text-xs">
        {data.year} - {data.km} km
      </Text>
      <Text className="font-bold mb-1 mt-3">R$ {data.price}</Text>

      <View className="w-full h-[1px] bg-slate-300"></View>

      <Text className="mb-1 text-xs mt-1">{data.city}</Text>
    </Pressable>
  );
}
