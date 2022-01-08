import { Platform } from "react-native";

const theme = {
  colors: {
    app: {
      backgroundPrimary: "#E1E5E8",
    },
    appBar: {
      backgroundPrimary: "#25292C",
      fontPrimary: "#FFFFFF",
    },
    border: {
      primary: "#000000",
      error: "#d73a4a",
    },
    container: {
      backgroundPrimary: "#FFFFFF",
    },
    separator: {
      backgroundPrimary: "#E1E5E8",
    },
    text: {
      error: "#d73a4a",
      secondary: "#FFFFFF",
    },
  },
  fontSizes: {
    appBar: 20,
    medium: 20,
  },
  fontFamily: Platform.select({
    ios: "Arial",
    android: "Roboto",
    default: "System",
  }),
};

export default theme;
