import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import colors from '../../res/colors';
class CoinsSearch extends Component {

    state = {
        query: ""
    }

    handleText = (query) => {
        this.setState({ query });

        if (this.props.onChange) {
            this.props.onChange(query);
        }
    }

    render() {

        const { query } = this.state;

        return (
            <View>
                <TextInput
                style={[
                    styles.textInput,
                    Platform.OS == 'ios' ?
                    styles.textInputIOS :  styles.textInputAndroid
                ]}
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Search Coin"
                    placeholderTextColor="#fff"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        color: 'white',
        height: 46,
        backgroundColor: colors.charade,
        paddingLeft: 16
    },
    textInputAndroid: {
        borderBottomColor: colors.zircon,
        borderBottomWidth: 2,
    },
    textInputIOS: {
        borderRadius:8,
        margin: 8
    },
});

export default CoinsSearch;