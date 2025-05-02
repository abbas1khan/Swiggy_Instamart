import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { RefObject } from 'react'
import { SharedValue, withTiming } from 'react-native-reanimated';

const useScroll = (scrollY: SharedValue<number>, scrollYGlobal: SharedValue<number>, prevScrollY: RefObject<number>) => {
    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollY = e.nativeEvent.contentOffset.y;
        const isScrollingDown = currentScrollY > prevScrollY.current;
        scrollY.value = withTiming(isScrollingDown ? 1 : 0, { duration: 300 });
        scrollYGlobal.value = currentScrollY;
        prevScrollY.current = currentScrollY;
    };
    return { onScroll }
}

export default useScroll