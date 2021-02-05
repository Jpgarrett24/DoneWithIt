import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms/index";
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingsApi from '../api/listings';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().notRequired().label("Description"),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    { label: "Furniture", value: 1, icon: "floor-lamp", backgroundColor: "#fc5c65" },
    { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
    { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
    { label: "Games", value: 4, icon: "google-controller", backgroundColor: "#26de81" },
    { label: "Clothing", value: 5, icon: "redhat", backgroundColor: "#2bcbba" },
    { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
    { label: "Movies & Music", value: 7, icon: "headphones", backgroundColor: "#4b7bec" },
    { label: "Books", value: 8, icon: "book-open-variant", backgroundColor: "#9b67e2" },
    { label: "Other", value: 9, icon: "package", backgroundColor: "#7c8ca1" },
];

const ListingEditScreen = () => {
    const location = useLocation();

    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not upload the listing');
        }

        resetForm();
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    autoCapitalize="sentences"
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="POST" />
            </AppForm>
        </Screen>
    );
};

export default ListingEditScreen

const styles = StyleSheet.create({
    container: { padding: 10 }
})
