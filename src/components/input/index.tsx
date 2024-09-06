import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {};

export function Input({ ...rest }: Props) {
  return (
    <TextInput
      {...rest}
      className="bg-transparent border py-3 px-2 h-10 rounded-md text-gray-900"
      placeholderTextColor={"#111827"}
    />
  );
}
