import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { colors } from './src/utils/Theme';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigation from './src/navigation/MainAppNavigation';
import { store } from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleProvider } from './src/layout/tamagui/TamaguiProvider';

let persister = persistStore(store);

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StyleProvider>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persister}>
                        <SafeAreaProvider>
                            <StatusBar
                                backgroundColor={colors.white}
                                barStyle="dark-content"
                            />
                            <NavigationContainer>
                                <MainAppNavigation />
                            </NavigationContainer>
                        </SafeAreaProvider>
                    </PersistGate>
                </Provider>
            </StyleProvider>
        </GestureHandlerRootView>
    );
};

export default App;
