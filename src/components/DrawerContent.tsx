import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { IStackRoutes } from "../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

const DrawerContent = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<IStackRoutes>>();

  return (
    <SafeAreaView>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity
          accessibilityLabel="Close button"
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}
        >
          <MaterialIcons name="close" size={26} testID="close-menu-icon" />
        </TouchableOpacity>

        <View style={{ borderBottomColor: "#c3c3c3", borderBottomWidth: 1 }} />

        <TouchableOpacity style={{ paddingBottom: 35 }}>
          <Text style={{ fontSize: 20, color: "#61646B" }}>Campañas</Text>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 32, paddingTop: 32 }}>
          <TouchableOpacity style={{ paddingBottom: 35 }}>
            <Text style={{ fontSize: 20, color: "#61646B" }}>Encuestas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
