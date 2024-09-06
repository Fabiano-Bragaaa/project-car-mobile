import { FlatList, TouchableOpacity } from "react-native";
import { ImageProps } from "../../../types/car";
import { Banner } from "./banner";

type Props = {
  images: ImageProps[];
  handleOpenImage: (imageUrl: string) => void;
};

export function BannerList({ handleOpenImage, images }: Props) {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleOpenImage(item.url)}
        >
          <Banner url={item.url} />
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
