import "react-native-gesture-handler/jestSetup";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("react-native-reanimated", () => {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const Reanimated = require("react-native-reanimated/mock.js");

  /* eslint-disable @typescript-eslint/no-empty-function */
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
