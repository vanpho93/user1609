import React, { Component } from 'react';
import { View, Text,StyleSheet, ActivityIndicator, Alert } from 'react-native';
import startApp from '../apis/startApp';

export class Start extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        startApp()
        .then(tokenObj => navigate('GoPlay', tokenObj))
        .catch(() => navigate('SignIn'));
    }
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