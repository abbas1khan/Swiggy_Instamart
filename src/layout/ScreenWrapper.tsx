import { View, ViewProps } from '@tamagui/core';
import React, { FC, ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../utils/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperProps extends ViewProps {
    children: ReactNode;
    translucent?: boolean;
    backgroundColor?: string;
    barStyle?: 'dark-content' | 'light-content';
    bottomPaddingEnabled?: boolean;
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({
    children,
    translucent = false,
    backgroundColor = colors.white,
    barStyle = 'dark-content',
    bottomPaddingEnabled = false,
    ...props
}) => {
    const { top, bottom } = useSafeAreaInsets();
    return (
        <View
            {...props}
            flex={1}
            paddingTop={!translucent ? top : 0}
            backgroundColor={backgroundColor}
        >
            <StatusBar barStyle={barStyle} />
            <View flex={1}>{children}</View>
            {bottomPaddingEnabled && (
                <View height={bottom} backgroundColor={'$white'} />
            )}
        </View>
    );
};

export default ScreenWrapper;
