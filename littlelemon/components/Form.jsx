import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TexfieldConfiguration, TextField } from "./ValidableTextField";

const Form = ({ onSubmission }) => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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
    backgroundColor: "white",
    padding: 24,
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 24,
    padding: 24,
    textAlign: "center",
    marginBottom: 100,
    marginTop: 50,
  },
});

export default Form;
