import React, { Component } from 'react';
import { View, Text, FlatList, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import Http from '../../libs/http';
import CoinItem from './CoinsItem';

import colors from '../../res/colors';


class ConinsScreen extends Component {

    state = {
        coins: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");

        this.setState({ coins: res.data, loading: false });
    }


    handlePress = () => {
        // console.log("Miremos los detalles", this.props);
        this.props.navigation.navigate('CoinDetail')
    }

    render() {

        const { coins, loading } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.textLigth}>
                    Coins Screen :p
                </Text>

                { loading ?
                    <ActivityIndicator color="#fff" size="large" />
                    : null
                }
                <FlatList
                    data={coins}
                    renderItem={({ item }) =>
                        <CoinItem item={item} />
                    }
                />
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade
    },
    textLigth: {
        margin: 5,
        color: 'white',
        textAlign: 'center'
    },
    textDarck: {
        color: 'black',
        textAlign: 'center'
    },
    btn: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        margin: 20
    },
});
export default ConinsScreen;