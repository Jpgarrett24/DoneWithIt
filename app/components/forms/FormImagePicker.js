import React from 'react';
import { useFormikContext } from "formik"

import { ErrorMessage } from '.';
import ImageInputList from '../ImageInputList';

const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name]

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
    };

    const handleRemove = (uri) => {
        setImageUris(name, imageUris.filter((image) => image !== uri));
    };

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
};

export default FormImagePicker;