import { Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "@assets/logo.png";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Props } from "@routes/index";

export function Header() {
  const navigation = useNavigation<NativeStackNavigationProp<Props>>();
  return (
    <SafeAreaView className="bg-gray-100 flex-row px-3 pt-4 items-center justify-between">
      <Image source={Logo} />

      <Pressable
        onPress={() => navigation.navigate("favorite")}
        className="bg-gray-950 w-10 h-10 justify-center items-center rounded-full"
      >
        <Feather name="bookmark" size={24} color={"#fff"} />
      </Pressable>
    </SafeAreaView>
  );
}
