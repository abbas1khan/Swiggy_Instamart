import React, { FC } from 'react';
import Text from '../tamaguicore/Text';
import { screenWidth } from '../../utils/Theme';
import { Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSharedState } from '../../context/SharedContext';
import { AnimatedView } from '../tamaguicore/AnimatedView';
import { BottomTabHeight } from '../../constants/Constants';
import { View } from '@tamagui/core';
import Scooter from '../../../assets/svgs/Scooter';

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
                            ? withTiming(BottomTabHeight, { duration: 600 })
                            : withTiming(0, { duration: 600 }),
                },
            ],
            position: 'absolute',
            bottom: 0,
        };
    });

    return (
        <>
            <AnimatedView width={screenWidth} style={animatedStyle}>
                <View
                    height={39}
                    backgroundColor={'$white'}
                    paddingVertical={12}
                    elevationAndroid={6}
                    borderTopLeftRadius={16}
                    borderTopRightRadius={16}
                    flexDirection="row"
                    alignItems="center"
                    paddingLeft={16}
                    gap={16}
                >
                    <View
                        width={48}
                        height={48}
                        borderRadius={48}
                        backgroundColor={'$grey5'}
                        marginBottom={24}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <View
                            width={36}
                            height={36}
                            borderRadius={36}
                            backgroundColor={'$white'}
                            overflow="hidden"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <View bottom={-5}>
                                <Scooter size={32} />
                            </View>
                        </View>
                    </View>
                    <Text fontSize={12} fontFamily={'$bold'}>
                        FREE DELIVERY
                        <Text fontSize={12} fontFamily={'$semiBold'}>
                            {' '}
                            on orders above ₹99
                        </Text>
                    </Text>
                </View>

                <View
                    height={BottomTabHeight}
                    flexDirection="row"
                    borderBottomWidth={1}
                    borderColor={'$grey'}
                    backgroundColor={'$white'}
                    elevationAndroid={1}
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
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    fontSize={12}
                                    fontFamily={'$bold'}
                                    color={isFocused ? '$primary' : '$grey4'}
                                    justifyContent="center"
                                >
                                    {label}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </AnimatedView>
        </>
    );
};

export default CustomBottomTab;
