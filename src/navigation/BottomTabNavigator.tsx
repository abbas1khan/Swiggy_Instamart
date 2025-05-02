import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../utils/Theme';
import ReorderScreen from '../screens/ReorderScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 56,
                    elevation: 1,
                    borderBottomWidth: 1,
                    borderColor: colors.grey,
                },
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
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
