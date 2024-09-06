import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Props } from "@routes/index";
import { useEffect, useState } from "react";
import { CarDetailProps } from "../../types/car";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@services/index";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import { BannerList } from "./components/bannerList";
import { BannerLoading } from "./components/banner";
import { Label } from "./components/label";

import * as Linking from "expo-linking";
import { ModalBanner } from "./components/modal";
import { useStorage } from "@hooks/useStorage";
import { useToast } from "@hooks/useToast";

type RouteDetail = {
  detail: {
    id: string;
  };
};

type DetailRouteProp = RouteProp<RouteDetail, "detail">;

export function Detail() {
  const [car, setCar] = useState<CarDetailProps>();
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<Props>>();
  const { params } = useRoute<DetailRouteProp>();
  const { saveItem } = useStorage();
  const { showToast } = useToast();

  useEffect(() => {
    async function loadCar() {
      if (!params.id) {
        return;
      }

      const docRef = doc(db, "cars", params.id);
      getDoc(docRef)
        .then((response) => {
          if (!response.data()) {
            navigation.navigate("home");
          }
          setCar({
            id: response.id,
            name: response.data()?.name,
            year: response.data()?.year,
            city: response.data()?.city,
            created: response.data()?.created,
            description: response.data()?.description,
            images: response.data()?.images,
            km: response.data()?.km,
            model: response.data()?.model,
            owner: response.data()?.owner,
            price: response.data()?.price,
            uid: response.data()?.uid,
            whatsapp: response.data()?.whatsapp,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }

    loadCar();
  }, [params.id]);

  async function handleCallPhone() {
    await Linking.openURL(`tel:${car?.whatsapp}`);
  }

  function openImage(url: string) {
    setModal(true);
    setSelectedImage(url);
  }

  function handleCloseModal() {
    setModal(false);
    setSelectedImage("");
  }

  async function handleFavorite() {
    if (!car) {
      return;
    }

    await saveItem(car);
    showToast("Carro favoritado com sucesso!", "SUCESS");
  }

  if (loading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} color={"#000"} />
      </SafeAreaView>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View className="flex-1 bg-gray-100 items-center pb-4">
          <Pressable
            onPress={() => navigation.navigate("home")}
            className="w-12 h-12 rounded-full bg-white justify-center items-center absolute left-6 top-11 z-10"
          >
            <Feather name="arrow-left" size={36} color={"#000"} />
          </Pressable>

          {loading && <BannerLoading />}

          {!loading && car?.images && (
            <BannerList
              images={car.images}
              handleOpenImage={(imageUrl) => openImage(imageUrl)}
            />
          )}

          <View className="bg-white relative w-[90%] rounded-md gap-1 py-3 px-2 -top-8 z-10 ">
            <Pressable
              onPress={handleFavorite}
              className="bg-[#ef4444] absolute z-20 p-3 rounded-full right-2 -top-6"
            >
              <Feather size={22} color={"#fff"} name="bookmark" />
            </Pressable>
            <Text className="font-bold text-lg">{car?.name}</Text>
            <Text>{car?.model}</Text>
          </View>

          <View className="self-start px-3 -mt-3 w-full">
            <Text className="text-2xl font-bold">R${car?.price}</Text>
            <View className="flex-row px-3 gap-6 mt-3 ">
              <Label label="Cidade" description={car?.city} />

              <Label label="Ano" description={car?.year} />
            </View>
            <View className="flex-row px-3 gap-6 mt-3 ">
              <Label label="Km" description={car?.km} />

              <Label label="Telefone" description={car?.whatsapp} />
            </View>

            <Text className="text-lg mt-4 mb-2 font-bold text-black">
              Descrição completa
            </Text>
            <View className="bg-white p-2 rounded-lg ">
              <Text className="text-base font-medium text-slate-600">
                {car?.description}
              </Text>
            </View>
            <Pressable
              onPress={handleCallPhone}
              className="w-full p-2 bg-[#08c168] my-3 rounded-lg items-center justify-center"
            >
              <Text className="text-base font-bold ">
                Conversar com o vendedor
              </Text>
            </Pressable>
          </View>

          <Modal visible={modal} transparent>
            <ModalBanner
              closeModal={handleCloseModal}
              imageUrl={selectedImage}
            />
          </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
