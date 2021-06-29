import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import colors from '../../res/colors';


const CoinItem = ({ item }) => {


    getImgArrow = () => {
        if (item.percent_change_1h > 0) {
            return require("../../assets/arrow_up.png");
        } else {
            return require("../../assets/arrow_down.png");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.textLigth}>{item.name}</Text>
                <Text style={styles.textSmall}>{item.symbol}</Text>
                <Text style={styles.price_usd}>
                    {`$${item.price_usd}`}
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percent_change_1h}>{item.percent_change_1h}</Text>
                <Image style={styles.imagenIcon}
                    source={getImgArrow()}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        borderBottomColor: colors.zircon,
        borderBottomWidth:1,
        marginLeft: Platform.OS == 'ios' ? 16:5
    },
    row: {
        flexDirection: "row"
    },
    textLigth: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12
    },
    textSmall: {
        color: "#fff",
        marginRight: 16,

        fontSize: 14
    },
    price_usd: {
        color: "#fff",
        fontSize: 14
    },
    percent_change_1h: {
        color: "#fff",
        fontSize: 12,
        marginRight: 8
    },
    imagenIcon: {
        width: 22,
        height: 22
    },

});

export default CoinItem;