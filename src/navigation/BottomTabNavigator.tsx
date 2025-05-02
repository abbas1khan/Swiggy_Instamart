import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen/HomeScreen';
import ReorderScreen from '../screens/reorderscreen/ReorderScreen';
import CustomBottomTab from '../components/bottomtab/CustomBottomTab';
import { useSharedState } from '../context/SharedContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const { flatlistRef } = useSharedState();

    const scrollToTop = (isFocused: boolean) => {
        if (isFocused) {
            flatlistRef?.current?.scrollToOffset({
                offset: 0,
                animated: true,
            });
        }
    };

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <CustomBottomTab {...props} />}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
                listeners={({ navigation }) => ({
                    tabPress: () => scrollToTop(navigation.isFocused()),
                })}
            />
            <Tab.Screen
                name="ReorderScreen"
                component={ReorderScreen}
                options={{ tabBarLabel: 'Reorder' }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
