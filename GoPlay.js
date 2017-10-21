import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class GoPlay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>GoPlay</Text>
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
    }
});