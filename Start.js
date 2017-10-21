import React, { Component } from 'react';
import { View, Text,StyleSheet, ActivityIndicator } from 'react-native';

export class Start extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3CBE0'
    }
});