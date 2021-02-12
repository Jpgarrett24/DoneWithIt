import React from 'react';
import { Keyboard, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Yup from "yup";
import logger from '../utility/logger';

import messagesApi from "../api/messages";
import { AppForm, AppFormField, SubmitButton } from './forms'

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message",)
});

const ContactSellerForm = ({ listing }) => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        }),
    });

    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if (!result.ok) {
            logger.log("Error", result);
            return Alert.alert("Error", "Could not sent the message to the seller.")
        }

        resetForm();

        Notifications.scheduleNotificationAsync({
            content: {
                title: "Awesome!",
                body: "Your message was sent to the seller."
            },
            trigger: {
                seconds: 1,
            }
        })
    }

    return (
        <AppForm
            initialValues={{ message: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <AppFormField
                maxLength={255}
                multiline
                name="message"
                numberOfLines={3}
                placeholder={"Message..."}
            />
            <SubmitButton title="Contact Seller" />
        </AppForm>
    )
};

export default ContactSellerForm;