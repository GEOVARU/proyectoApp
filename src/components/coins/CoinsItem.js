import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const CoinItem = ({ item }) => {
    return (
        <View >
            <View>
                <Text style={styles.textLigth}>{item.name} - {item.symbol}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    textLigth: {
        margin: 5,
        color: 'white',
    },

});

export default CoinItem;