import { View } from '@tamagui/core';
import React from 'react';
import Text from '../components/tamaguicore/Text';
import ScreenWrapper from '../layout/ScreenWrapper';
import LiveItUp from '../components/common/LiveItUp';

const HomeScreen = () => {
    return (
        <ScreenWrapper>
            <View flex={1} justifyContent="flex-end" alignItems="center">
                {/* <Text>Home Screen</Text> */}
                <LiveItUp />
            </View>
        </ScreenWrapper>
    );
};

export default HomeScreen;
