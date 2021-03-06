import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../res/colors';


const FavoritesEmptyState = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                You  don't have any favorite yet
            </Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    text: {
        color: "#ffff",
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    },

});

export default FavoritesEmptyState;