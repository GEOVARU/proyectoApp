import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConinsScreen from './CoinsScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Coins" component={ConinsScreen} />
        </Stack.Navigator>
    );
}
export default CoinsStack;