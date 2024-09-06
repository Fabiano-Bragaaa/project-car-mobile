import { ToastProvider } from "@contexts/toastContext";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <ToastProvider>
        <StatusBar backgroundColor="#f3f4f6" barStyle="dark-content" />
        <Routes />
      </ToastProvider>
    </NavigationContainer>
  );
}
