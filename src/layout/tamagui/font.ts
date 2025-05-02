import { createFont } from '@tamagui/core';
import { fontFamily } from '../../utils/Theme';

export const createGilroyFont = (family: string) =>
    createFont({
        family,
        size: {},
    });

const fonts = {
    ultraLight: createGilroyFont(fontFamily.ultraLight),
    black: createGilroyFont(fontFamily.black),
    bold: createGilroyFont(fontFamily.bold),
    extraBold: createGilroyFont(fontFamily.extraBold),
    heavy: createGilroyFont(fontFamily.heavy),
    light: createGilroyFont(fontFamily.light),
    medium: createGilroyFont(fontFamily.medium),
    regular: createGilroyFont(fontFamily.regular),
    semiBold: createGilroyFont(fontFamily.semiBold),
    thin: createGilroyFont(fontFamily.thin),
};

export default fonts;