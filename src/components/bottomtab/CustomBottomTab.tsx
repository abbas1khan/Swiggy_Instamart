import { View } from '@tamagui/core';
import React, { FC } from 'react';
import Text from '../tamaguicore/Text';
import { colors, screenWidth } from '../../utils/Theme';
import { Pressable, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSharedState } from '../../context/SharedContext';
import { AnimatedView } from '../tamaguicore/AnimatedView';
import { BottomTabHeight } from '../../constants/Constants';

const CustomBottomTab: FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    const { scrollY } = useSharedState();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY:
                        scrollY.value == 1
                            ? withTiming(100, { duration: 300 })
                            : withTiming(0, { duration: 300 }),
                },
            ],
            position: 'absolute',
            bottom: 0,
        };
    });

    return (
        <>
            <AnimatedView
                width={screenWidth}
                height={BottomTabHeight}
                backgroundColor={'$white'}
                elevationAndroid={1}
                borderBottomWidth={1}
                borderColor={'$grey'}
                flexDirection="row"
                style={[animatedStyle]}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <Pressable
                            key={`button-${index}`}
                            accessibilityState={
                                isFocused ? { selected: true } : {}
                            }
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarButtonTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1 }}
                        >
                            <Text
                                style={{
                                    color: isFocused
                                        ? colors.primary
                                        : colors.black,
                                }}
                            >
                                {label}
                            </Text>
                        </Pressable>
                    );
                })}
            </AnimatedView>
        </>
    );
};

export default CustomBottomTab;
