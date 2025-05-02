import React from 'react';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import { isAndroid } from '../utils/Theme';
import BottomTabNavigator from './BottomTabNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from '@tamagui/core';

const Stack = createStackNavigator();

const MainAppNavigation = () => {
    const { bottom } = useSafeAreaInsets();
    return (
        <View flex={1} paddingBottom={bottom}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    ...(isAndroid && {
                        ...TransitionPresets.SlideFromRightIOS,
                    }),
                }}
            >
                <Stack.Screen
                    name="BottomTabNavigator"
                    component={BottomTabNavigator}
                />
            </Stack.Navigator>
        </View>
    );
};

export default MainAppNavigation;
