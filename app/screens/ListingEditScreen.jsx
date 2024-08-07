import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import useLocation from "../hooks/useLocation";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
  AppFormPicker,
} from "../components/forms";

import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "email",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "blue",
    icon: "lock",
  },
];
const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={"images"} />
        <AppFormField maxLength={255} name={"title"} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name={"catgory"}
          numberOfColumns={3}
          placeholder={"Category"}
          width={"50%"}
        />
        <AppFormField
          maxLength={255}
          multiline
          name={"decsription"}
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
