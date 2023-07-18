import DrawerContent from "./DrawerContent";
import React from "react";
import { render } from "@testing-library/react-native";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      dispatch: mockedDispatch,
    }),
  };
});

test("Drawer content", () => {
  const { getByText, debug } = render(<DrawerContent />);

  const menuCampaign = getByText(/campañas/i);
  const menuSurvey = getByText(/encuestas/i);

  expect(menuCampaign).toBeTruthy();
  expect(menuSurvey).toBeTruthy();

  debug();
});
