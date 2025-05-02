import { View } from '@tamagui/core';
import React, { FC } from 'react';
import Text, { TextProps } from '../tamaguicore/Text';
import { colors } from '../../utils/Theme';
import { ColorValue } from 'react-native';

interface ButtonProps {
    title: string;
    fontSize?: number;
    fontFamily?: TextProps['fontFamily'];
    width?: number | string;
    height?: number | string;
    paddingHorizontal?: number;
    onPress?: () => void;
    backgroundColor?: colors | ColorValue;
    textColor?: colors | ColorValue;
}

const Button: FC<ButtonProps> = ({
    title = '',
    fontSize = 16,
    fontFamily = '$bold',
    width,
    height = 44,
    onPress = () => {},
    paddingHorizontal = 16,
    backgroundColor = colors.primary,
    textColor = colors.white,
}) => {
    return (
        <View
            width={width}
            height={height}
            borderRadius={12}
            onPress={onPress}
            alignItems="center"
            animation={'bouncy'}
            justifyContent="center"
            pressStyle={{ scale: 0.95 }}
            backgroundColor={backgroundColor}
            {...(!width && { paddingHorizontal })}
        >
            <Text fontSize={fontSize} fontFamily={fontFamily} color={textColor}>
                {title}
            </Text>
        </View>
    );
};

export default Button;
