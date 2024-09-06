import {
  Image,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

type Props = {
  closeModal: () => void;
  imageUrl: string;
};

export function ModalBanner({ closeModal, imageUrl }: Props) {
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0, 0.9)" }}
    >
      <StatusBar backgroundColor="rgba(0,0,0, 0.9)" />
      <Pressable
        onPress={closeModal}
        className="bg-white items-center justify-center absolute z-10 rounded-full w-8 h-8 right-3 top-[270px] "
      >
        <Feather name="x" size={20} color={"#000"} />
      </Pressable>
      <TouchableWithoutFeedback>
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full"
          style={{ resizeMode: "contain" }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
