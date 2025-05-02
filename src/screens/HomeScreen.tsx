import { View } from '@tamagui/core';
import React, { useCallback, useRef } from 'react';
import ScreenWrapper from '../layout/ScreenWrapper';
import LiveItUp from '../components/common/LiveItUp';
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { useSharedState } from '../context/SharedContext';
import { withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
    const { scrollY, scrollYGlobal, scrollToTop, flatlistRef } =
        useSharedState();
    const prevScrollY = useRef(0);

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollY = e.nativeEvent.contentOffset.y;
        const isScrollingDown = currentScrollY > prevScrollY.current;
        scrollY.value = withTiming(isScrollingDown ? 1 : 0, { duration: 300 });
        scrollYGlobal.value = currentScrollY;
        prevScrollY.current = currentScrollY;
    };

    useFocusEffect(
        useCallback(() => {
            return () => {
                setTimeout(() => {
                    scrollToTop();
                }, 0);
            };
        }, []),
    );

    return (
        <ScreenWrapper>
            <View flex={1} justifyContent="flex-end" alignItems="center">
                {/* @ts-ignore */}
                <FlatList
                    ref={flatlistRef}
                    onScroll={onScroll}
                    ListHeaderComponent={() => {
                        return (
                            <>
                                <LiveItUp />
                                <LiveItUp />
                                <LiveItUp />
                                <LiveItUp />
                                <LiveItUp />
                            </>
                        );
                    }}
                    ListFooterComponent={ListFooterComponent}
                />
            </View>
        </ScreenWrapper>
    );
};

export default HomeScreen;

const ListFooterComponent = () => {
    return <LiveItUp />;
};
