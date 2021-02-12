import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
};

const isExpired = (item) => {
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime, 'minute') > expiryInMinutes;
}

const get = async (key) => {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value)

    if (!item) return null;
    if (isExpired(item)) {
        await AsyncStorage.removeItem(prefit + key);
        return null
    }

    return item.value
}


export default {
    store,
    get
}