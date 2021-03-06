import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: colors.blackPearl,
                shadowOpacity:0
            },
            headerTintColor: colors.white
        }}
        >
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