import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";

export type IStackRoutes = {
  home: undefined;
  insertPhoneNumber: undefined;
  insertSMSCode: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<IStackRoutes>();

const StackRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="insertPhoneNumber"
    >
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export default StackRoutes;
