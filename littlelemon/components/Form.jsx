import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TexfieldConfiguration, TextField } from "./ValidableTextField";
import {theme} from "../Utils/Theme";

const Form = ({ onSubmission }) => {

  // MARK: - States
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // MARK: - Form Configurations
  const nameConf = new TexfieldConfiguration(
    "First Name",
    "First Name",
    "string",
    handleNameValidity, // Corrected prop name
    "LastName should only contain letters"
  );

  const emailConf = new TexfieldConfiguration(
    "E-mail",
    "e-mail",
    "email",
    handleEmailValidity, // Corrected prop name
    "Please enter a valid e-mail address",
    "email-address"
  );

  const confs = [nameConf, emailConf];

  // MARK: - Form Validation
  function handleNameValidity(value) {
    setIsNameValid(value);
    setIsFormValid(isNameValid && isEmailValid);
    onSubmission(isFormValid);
  }

  function handleEmailValidity(value) {
    setIsEmailValid(value);
    setIsFormValid(isNameValid && isEmailValid);
    onSubmission(isFormValid);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let us get to know you</Text>
      {confs.map((config, index) => (
        <TextField
          key={index}
          configuration={config}
          onValidationSet={config.onValidationSet}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.l,
    alignItems: "center",
  },
  title: [theme.textVariants.title, {
    color: theme.colors.foreground,
    padding: theme.spacing.l,
    textAlign: "center",
    marginBottom: 100,
    marginTop: 50,
  }],
});

export default Form;
