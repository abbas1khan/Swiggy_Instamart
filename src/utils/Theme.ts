import { Dimensions, Platform } from "react-native";

export const windowWidth = Dimensions.get("window").width
export const windowHeigth = Dimensions.get("window").height
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'

export enum fontFamily {
    heavy = "Gilroy-Heavy",
    black = "Gilroy-Black",
    extraBold = "Gilroy-ExtraBold",
    bold = "Gilroy-Bold",
    semiBold = "Gilroy-SemiBold",
    medium = "Gilroy-Medium",
    regular = "Gilroy-Regular",
    light = "Gilroy-Light",
    ultraLight = "Gilroy-UltraLight",
    thin = "Gilroy-Thin",
}

export enum colors {
    primary = '#fe5200',

    white = "#ffffff",
    black = "#000000",
    black2 = '#414449',
    transparent = "transparent",

    grey = '#f4f4f4',
    grey2 = '#656a6c',
    grey3 = '#898a8e',

    lightGrey = '#f5f5f5'
}

const rgbaWhite = (opacity: number): string =>
    `rgba(255,255,255,${opacity})`;

const rgbaBlack = (opacity: number): string =>
    `rgba(0,0,0,${opacity})`;

const rgba = (value: number = 0, opacity: number = 1): string =>
    `rgba(${value},${value},${value},${opacity})`;

export { rgbaWhite, rgbaBlack, rgba }