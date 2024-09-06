import { useCallback, useEffect, useState } from "react";

import { Header } from "@components/header";
import { Input } from "@components/input";

import { ActivityIndicator, FlatList, Keyboard, View } from "react-native";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@services/index";
import { PropsCar } from "../../types/car";
import { CarList } from "@components/carList";

export function Home() {
  const [input, setInput] = useState("");
  const [cars, setCars] = useState<PropsCar[]>([]);
  const [loading, setLoading] = useState(true);

  async function LoadCars() {
    const carRef = collection(db, "cars");
    const queryRef = query(carRef, orderBy("created", "desc"));
    getDocs(queryRef).then((response) => {
      let listsCars = [] as PropsCar[];

      response.forEach((doc) => {
        listsCars.push({
          id: doc.id,
          name: doc.data().name,
          year: doc.data().year,
          city: doc.data().city,
          km: doc.data().km,
          price: doc.data().price,
          uid: doc.data().uid,
          images: doc.data().images,
        });
      });

      setCars(listsCars);

      setLoading(false);
    });
  }

  function debounce(func: (...args: string[]) => void, delay: number) {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: string[]) => {
      if (timeout) {
        clearInterval(timeout);
      }

      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  function handleInputChange(text: string) {
    setInput(text);
    delayedApiCall(text);
  }

  const delayedApiCall = useCallback(
    debounce(async (newText) => await fetchSearchCar(newText), 800),
    []
  );

  async function fetchSearchCar(newText: string) {
    if (newText.trim() === "") {
      LoadCars();
      setInput("");
      return;
    }

    setCars([]);

    const q = query(
      collection(db, "cars"),
      where("name", ">=", newText.toUpperCase()),
      where("name", "<=", newText.toUpperCase() + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    let listsCars = [] as PropsCar[];

    querySnapshot.forEach((doc) => {
      listsCars.push({
        id: doc.id,
        name: doc.data().name,
        year: doc.data().year,
        city: doc.data().city,
        km: doc.data().km,
        price: doc.data().price,
        uid: doc.data().uid,
        images: doc.data().images,
      });
    });

    setCars(listsCars);
    Keyboard.dismiss();
  }

  useEffect(() => {
    async function FetchCars() {
      LoadCars();
    }

    FetchCars();
  }, []);

  return (
    <>
      <Header />
      <View className="bg-gray-100 flex-1 px-3 items-center">
        <View className="w-full mt-4 bg-white rounded-lg">
          <Input
            placeholder="Procure o seu novo carro"
            value={input}
            onChangeText={(text) => handleInputChange(text)}
          />
        </View>

        {loading && (
          <ActivityIndicator
            className="justify-center items-center "
            size={"large"}
            color={"#000"}
          />
        )}

        <FlatList
          className="flex-1 mt-1 pt-3"
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarList
              data={item}
              widthScreen={cars.length <= 1 ? "100%" : "49%"}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 14 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
