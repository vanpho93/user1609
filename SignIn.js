import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import signInApi from '../apis/signIn';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn() {
        const { email, password } = this.state;
        signInApi(email, password)
        .then(resJson => {
            if(resJson.message) return this.props.navigation.navigate('GoPlay');
            Alert.alert('Sign in error', resJson.error);
        })
        .catch(err => console.log(err.message));
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput 
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.onSignIn} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
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
        backgroundColor: '#CAE3FC'
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: 300,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        height: 40
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