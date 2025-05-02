import { createTamagui, createTokens } from '@tamagui/core';
import fonts from './font';
import { colors } from '../../utils/Theme';
import animations from './animations';

export const tamaguiConfig = createTamagui({
    fonts,
    animations,
    themes: { light: {} },
    tokens: createTokens({ color: colors }),
});

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends Conf { }
}