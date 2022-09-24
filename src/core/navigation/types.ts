import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
export type StackParamList = {
  Feeds: undefined;
  CreatePost: undefined;
};

export type NavigationProp<RouteName extends keyof StackParamList> =
  NativeStackNavigationProp<StackParamList, RouteName>;
