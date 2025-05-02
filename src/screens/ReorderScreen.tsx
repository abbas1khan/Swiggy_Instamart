import { View } from '@tamagui/core';
import React from 'react';
import Text from '../components/tamaguicore/Text';
import ScreenWrapper from '../layout/ScreenWrapper';
import Button from '../components/common/Button';
import { Image } from 'react-native';
import { BottomTabHeight } from '../constants/Constants';

const ReorderScreen = () => {
    return (
        <ScreenWrapper translucent>
            <View
                flex={1}
                justifyContent="center"
                alignItems="center"
                paddingHorizontal={16}
            >
                <Image
                    resizeMode="contain"
                    source={require('../assets/images/reorder.jpg')}
                    style={{
                        width: '100%',
                        height: 164,
                        resizeMode: 'contain',
                        marginBottom: 50,
                        marginTop: -BottomTabHeight,
                    }}
                />
                <Text fontSize={20} fontFamily={'$extraBold'} color={'$black2'}>
                    Reorder items from here
                </Text>
                <Text
                    fontSize={16}
                    fontFamily={'$medium'}
                    color={'$grey2'}
                    textAlign="center"
                    marginTop={8}
                    marginBottom={24}
                    letterSpacing={-0.2}
                >
                    Buy more items to see all your past items here for easy
                    reordering
                </Text>
                <Button title="Browse categories" />
            </View>
        </ScreenWrapper>
    );
};

export default ReorderScreen;
