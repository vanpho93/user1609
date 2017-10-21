import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import getToken from '../apis/getToken';

export class GoPlay extends Component {
    onShowToken() {
        getToken()
        .then(token => Alert.alert('Token', token))
        .catch(err => Alert.alert('Error', err.message));
    }
    render() {
        const { name, email, phone } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Email: { email }</Text>
                <Text style={styles.text}>Name: { name }</Text>
                <Text style={styles.text}>Phone: { phone }</Text>
                <TouchableOpacity onPress={this.onShowToken.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>SHOW TOKEN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBE27F'
    },
    text: {
        fontSize: 20
    },
    button: {
        width: 300,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#FBFB00',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'purple'
    }
});