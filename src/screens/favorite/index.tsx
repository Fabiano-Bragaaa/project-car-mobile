import { View, Text, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";

import { useIsFocused, useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Props } from "@routes/index";
import { useEffect, useState } from "react";

import { PropsCar } from "../../types/car";
import { CarList } from "@components/carList";
import { useStorage } from "@hooks/useStorage";
import { useToast } from "@hooks/useToast";

export function Favorite() {
  const navigation = useNavigation<NativeStackNavigationProp<Props>>();
  const [cars, setCar] = useState<PropsCar[]>([]);

  const { getItem, removeItem } = useStorage();
  const { showToast } = useToast();
  const isFocused = useIsFocused();

  async function handleRemoveCar(id: string) {
    const listsCars = await removeItem(id);
    setCar(listsCars);
    showToast("Carro removido dos favoritos", "DEFAULT");
  }

  useEffect(() => {
    async function loadFavoriteCars() {
      const listsCars = await getItem();
      setCar(listsCars);
    }

    loadFavoriteCars();
  }, [isFocused]);

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-3">
      <View className="flex-row items-center gap-6 py-2 ">
        <Pressable onPress={() => navigation.navigate("home")}>
          <Feather name="arrow-left" size={32} color={"#000"} />
        </Pressable>
        <Text className="text-2xl text-black font-bold">Meus Favoritos</Text>
      </View>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarList
            data={item}
            widthScreen={"100%"}
            enableRemove={true}
            removeItem={() => handleRemoveCar(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 14 }}
        className="flex-1 mt-1 pt-3"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
