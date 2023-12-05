const palette = {
  green: "#495E57",
  yellow: "F4CE14",
  red: "#CD0E61",
  black: "#0B0B0B",
  white: "#F0F2F3",
  grey: "#d9d9d9",
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    lightBackground: palette.grey,
    primary: palette.green,
    secondary: palette.yellow,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontFamily: "Raleway",
      fontSize: 30,
      fontWeight: "bold",
    },
    subtitle: {
      fontFamily: "Raleway",
      fontSize: 24,
    },
    cta: {
      fontFamily: "Raleway",
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      fontFamily: "Raleway",
      fontSize: 16,
    },
    caption: {
      fontFamily: "Raleway",
      fontSize: 12,
    },
  },
  radius: {
    m: 16
  }
};
