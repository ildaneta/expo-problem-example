import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import DrawerRoutes from "./drawer.routes";

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};

export default Routes;
