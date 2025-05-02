import { Text as CoreText, GetProps, styled } from '@tamagui/core';
import Animated from 'react-native-reanimated';

export const Text = styled(CoreText, {
    color: '$black',
    variants: {
        variant: {
            title1: { fontFamily: '$regular', fontSize: 14 },
        },
        striked: {
            true: { textDecorationLine: 'line-through' },
        },
    } as const,
    defaultVariants: { variant: 'title1' },
});

export const AnimatedText = Animated.createAnimatedComponent(Text);

export default Text;

export type TextProps = GetProps<typeof Text>;
