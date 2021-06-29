import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';


const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Coins" 
            component={ConinsScreen} />
            <Stack.Screen 
            name="CoinDetail" 
            component={CoinDetailScreen} />
        </Stack.Navigator>
    );
}


export default CoinsStack;