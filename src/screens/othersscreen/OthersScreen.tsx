import React from 'react';
import ScreenWrapper from '../../layout/ScreenWrapper';
import { View } from '@tamagui/core';
import Text from '../../components/tamaguicore/Text';

const OthersScreen = () => {
    return (
        <ScreenWrapper>
            <View flex={1} justifyContent="center" alignItems="center">
                <Text>OthersScreen</Text>
            </View>
        </ScreenWrapper>
    );
};

export default OthersScreen;
