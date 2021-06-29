import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SectionList } from 'react-native';
import colors from '../../res/colors';

class CoinDetailScreen extends Component {
    state = {
        coin: {}
    }

    getSymbolIcon = (name) => {

        if (name) {
            console.log("entro aquiii");
            const symbol = name.toLowerCase().replace(" ", "-");
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`
        }
    }
    getSections = (coin) => {
        const section = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }

        ]
        return section;
    }

    componentDidMount() {
        const { coin } = this.props.route.params;
        this.props.navigation.setOptions({ title: coin.symbol });
        this.setState({ coin });
    }

    render() {

        const { coin } = this.state;

        return (
            <View style={style.container}>
                <View style={style.subHeader}>
                    <Image style={style.iconImg} source={{ uri: this.getSymbolIcon(coin.name) }} />
                    <Text style={style.titleText}>
                        {coin.name}
                    </Text>

                    <SectionList
                        sections={this.getSections(coin)}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) =>
                            <View style={style.sectionItem}>
                                <Text style={style.sectionText}>{item}</Text>
                            </View>
                        }
                        renderSectionHeader={({ section }) =>
                            <View style={style.sectionHeader}>

                                <Text style={style.sectionText}>{section.title}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade
    },
    subHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 16,
        flexDirection: "row"
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 10
    },
    iconImg: {
        width: 30,
        height: 30
    },
    sectionHeader: {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 8
    },
    sectionItem: {
        padding: 9
    },
    sectionText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    },
});
export default CoinDetailScreen;