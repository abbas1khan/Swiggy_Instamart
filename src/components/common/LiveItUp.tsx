import { StyleSheet } from 'react-native';
import React from 'react';
import { View } from '@tamagui/core';
import Text from '../tamaguicore/Text';
import { screenWidth } from '../../utils/Theme';

const LiveItUp = () => {
    return (
        <View
            width={screenWidth}
            height={330}
            backgroundColor={'$lightGrey'}
            paddingLeft={24}
            justifyContent="flex-end"
            paddingBottom={60}
        >
            <Text
                fontSize={76}
                fontFamily={'$black'}
                color={'$grey3'}
                letterSpacing={-1}
            >
                Live
            </Text>
            <Text
                fontSize={76}
                fontFamily={'$black'}
                color={'$grey3'}
                marginTop={-30}
                marginBottom={10}
                letterSpacing={-1}
            >
                it up!
            </Text>
            <Text fontSize={16} fontFamily={'$medium'} color={'$grey3'}>
                Crafted with ❤️ by Abbas Khan
            </Text>
        </View>
    );
};

export default React.memo(LiveItUp);

const styles = StyleSheet.create({});
