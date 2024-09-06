import AsyncStorage from "@react-native-async-storage/async-storage";

import { PropsCar } from "../types/car";

const key = "@webcars";

export function useStorage() {
  async function getItem(): Promise<PropsCar[]> {
    try {
      const cars = await AsyncStorage.getItem(key);
      return (cars && JSON.parse(cars)) || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  async function saveItem(newCar: PropsCar) {
    try {
      let cars = await getItem();

      let findCar = cars.find((car) => car.id === newCar.id);

      if (findCar) {
        return;
      }

      cars.push(newCar);

      await AsyncStorage.setItem(key, JSON.stringify(cars));
    } catch (err) {
      console.log("erro ao salvar", err);
    }
  }
  async function removeItem(id: string): Promise<PropsCar[] | []> {
    try {
      let cars = await getItem();

      let updatedCarLists = cars.filter((car) => {
        return car.id !== id;
      });

      await AsyncStorage.setItem(key, JSON.stringify(updatedCarLists));

      return updatedCarLists;
    } catch (err) {
      console.log("erro ao remover", err);
      return [];
    }
  }

  return {
    getItem,
    saveItem,
    removeItem,
  };
}
