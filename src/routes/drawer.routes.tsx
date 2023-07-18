import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/DrawerContent";
import StackRoutes from "./stack.routes";

export type IDrawerRoutes = {
  stack: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<IDrawerRoutes>();

const DrawerRoutes = (): JSX.Element => {
  return (
    <Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        drawerPosition: "right",
        drawerStyle: { width: "100%" },
        overlayColor: "transparent",
        headerShown: false,
        swipeEnabled: false,
      }}
    >
      <Screen name="stack" component={StackRoutes} />
    </Navigator>
  );
};

export default DrawerRoutes;
