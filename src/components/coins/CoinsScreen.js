import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http';

class ConinsScreen extends Component {

    componentDidMount = async () => {
        const coins = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        console.log("coins : ", coins);
    }
    

    handlePress = () => {
        // console.log("Miremos los detalles", this.props);
        this.props.navigation.navigate('CoinDetail')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textLigth}>
                    Coins Screen :p
                </Text>
                <Pressable style={styles.btn} onPress={this.handlePress}>
                    <Text style={styles.textDarck}>
                        Ir a la pantalla
                    </Text>
                </Pressable>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    textLigth: {
        margin:5,
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