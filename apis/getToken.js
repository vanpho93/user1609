import { AsyncStorage } from 'react-native';

export default () => {
    return AsyncStorage.getItem('@token');
}
