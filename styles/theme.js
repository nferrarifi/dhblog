import { extendTheme } from "@chakra-ui/react";
const customTheme = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ customTheme });

export default theme;
