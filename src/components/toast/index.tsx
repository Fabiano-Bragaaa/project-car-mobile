import { MessageProps } from "@contexts/toastContext";
import { useEffect, useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";

type Props = {
  messages: MessageProps[];
  hideToast: () => void;
};

export function Toast({ messages, hideToast }: Props) {
  const opacityAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (messages) {
      Animated.timing(opacityAnimated, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [messages]);

  return (
    <Animated.View
      style={{ opacity: opacityAnimated }}
      className="absolute top-10 left-0 right-0 mx-3"
    >
      {messages &&
        messages.map((item, index) => (
          <Pressable
            key={index}
            className="px-5 py-2 mt-2 rounded-lg"
            style={{
              backgroundColor:
                item.type === "DEFAULT"
                  ? "rgba(0,0,0,0.8)"
                  : "rgba(0,184,95,0.89)",
            }}
            onPress={hideToast}
          >
            <Text className="text-white text-base">{item.message}</Text>
          </Pressable>
        ))}
    </Animated.View>
  );
}
