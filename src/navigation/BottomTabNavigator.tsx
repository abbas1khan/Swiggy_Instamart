import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ReorderScreen from '../screens/ReorderScreen';
import CustomBottomTab from '../components/bottomtab/CustomBottomTab';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
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
