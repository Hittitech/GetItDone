import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import colors from "@/app/config/colors";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} color={colors.primary} onPress={handleSubmit} />
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});
