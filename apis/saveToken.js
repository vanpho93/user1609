import { AsyncStorage } from 'react-native';

export default (token) => {
    return AsyncStorage.setItem('@token', token);
}
