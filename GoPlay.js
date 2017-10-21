import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class GoPlay extends Component {
    render() {
        const { name, email, phone } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Email: { email }</Text>
                <Text style={styles.text}>Name: { name }</Text>
                <Text style={styles.text}>Phone: { phone }</Text>
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
    }
});