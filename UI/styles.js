import { Dimensions, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;
const { height, width } = Dimensions.get("window");
const newMaxHeight = height - statusBarHeight;
const heightTen = newMaxHeight / 10;
const widthTen = width / 10;

// Container heights should add up to ten
export const containerHeights = {
  one: heightTen,
  two: heightTen * 2,
  three: heightTen * 3,
  four: heightTen * 4,
  five: heightTen * 5,
  six: heightTen * 6,
  seven: heightTen * 7,
  eight: heightTen * 8,
  nine: heightTen * 9,
  full: newMaxHeight,
};

export const containerWidths = {
  one: widthTen,
  two: widthTen * 2,
  three: widthTen * 3,
  four: widthTen * 4,
  five: widthTen * 5,
  six: widthTen * 6,
  seven: widthTen * 7,
  eight: widthTen * 8,
  nine: widthTen * 9,
};

// statusBar for top container
export const containerPadding = {
  statusBar: statusBarHeight,
  buttonSpacing: widthTen / 2,
  buttonSpacing1: widthTen / 2.5,
  buttonSpacing2: widthTen / 4,
};

// Default sizes for buttons and inputs
export const buttonSizes = {
  regularW: "90%",
  regularH: widthTen * 1.2,
};

// Ya!
export const mainColors = {
  main: "#B2A4FF",
  secondary: "#ACBCFF",
  third: "#AEE2FF",
  fourth: "#E6FFFD",
  fifth: "#ECC9EE",
  sixth: "#C9A7EB",
};

const GuidelineBaseHeight = 844;
const GuidelineBaseWidth = 390;

export const verticalScale = (size, floor = true, setMax = false) => {
  size = parseFloat(size);
  let result = (height / GuidelineBaseHeight) * size;
  let newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

export const horizontalScale = (size, floor = true, setMax = false) => {
  size = parseFloat(size);
  let result = (width / GuidelineBaseWidth) * size;
  let newSize = floor ? Math.floor(result) : result;
  return setMax && newSize > size ? size : newSize;
};

export const textSizes = {
  small: 18,
  med: 30,
  large: 40,
  extraLarge: 60,
};

export const loadedFonts = {
  outfitReg: "Outfit-Regular",
  outfitBold: "Outfit-Bold",
  natsReg: "NATS-Regular",
  remSemi: "REM-SemiBold",
  montBold: "Montserrat-Bold",
};