import { Dimensions, Image, View } from "react-native";

const { width: widthScreen } = Dimensions.get("window");

export function Banner({ url }: { url: string }) {
  return (
    <Image
      source={{ uri: url }}
      className="h-80 mx-1 rounded-md mt-2"
      style={{ width: widthScreen / 1.2 }}
      resizeMode="cover"
    />
  );
}

export function BannerLoading() {
  return (
    <View
      className="h-80 mx-1 rounded-md mt-2 bg-[#ddd] "
      style={{ width: widthScreen - 16 }}
    ></View>
  );
}
