import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/home";
import { Detail } from "@screens/detail";
import { Favorite } from "@screens/favorite";

export type Props = {
  home: undefined;
  detail: {
    id: string;
  };
  favorite: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<Props>();

export function Routes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="detail" component={Detail} />
      <Screen name="favorite" component={Favorite} />
    </Navigator>
  );
}
