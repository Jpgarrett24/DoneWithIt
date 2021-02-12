import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utility/logger';


const useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

        if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener);
    }, [])

    const registerForPushNotifications = async () => {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;

        try {
            const { data: token } = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
        } catch (error) {
            logger.log("Error getting a push token", error);
        }
    }
};

export default useNotifications;