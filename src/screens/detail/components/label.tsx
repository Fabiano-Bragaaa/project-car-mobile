import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
  label: string;
  description: string | undefined;
};

export function Label({ description, label }: Props) {
  return (
    <View className="flex-1 px-3">
      <Text className="text-[#444] text-lg">{label}</Text>
      <Text className="text-black font-bold text-base ">{description}</Text>
    </View>
  );
}
