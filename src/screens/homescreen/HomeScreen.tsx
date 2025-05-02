import { View } from '@tamagui/core';
import React, { useCallback, useRef } from 'react';
import ScreenWrapper from '../../layout/ScreenWrapper';
import LiveItUp from '../../components/common/LiveItUp';
import { FlatList } from 'react-native';
import { useSharedState } from '../../context/SharedContext';
import { useFocusEffect } from '@react-navigation/native';
import useScroll from './hooks/useScroll';

const HomeScreen = () => {
    const prevScrollY = useRef(0);
    const { scrollY, scrollYGlobal, scrollToTop, flatlistRef } =
        useSharedState();
    const { onScroll } = useScroll(scrollY, scrollYGlobal, prevScrollY);

    const showBottomTab = () => {
        setTimeout(() => {
            scrollToTop();
        }, 0);
    };

    useFocusEffect(
        useCallback(() => {
            showBottomTab();
            return () => {
                showBottomTab();
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
