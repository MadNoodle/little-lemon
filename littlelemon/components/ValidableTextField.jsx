import { useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import {
  StyleSheet,
  TextInput,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import warningLogo from "../assets/warning.png";
import { validateString, validateEmail } from "../Utils/Validators";

export class TexfieldConfiguration {
  constructor(
    title,
    placeholder,
    validator,
    onValidationSet,
    rules,
    type = "default"
  ) {
    this.title = title;
    this.placeholder = placeholder;
    this.validator = validator;
    this.onValidationSet = onValidationSet;
    this.rules = rules;
    this.type = type;
  }
}

export const TextField = ({ configuration, onValidationSet }) => {
  const screen = useWindowDimensions();
  // States
  const [text, onChangeText] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Selectors
  const handleTextChange = (inputText) => {
    onChangeText(inputText);
    switch (configuration.validator) {
      case "string":
        setIsValid(validateString(inputText));
        onValidationSet(isValid);
        break;
      case "email":
        setIsValid(validateEmail(inputText));
        onValidationSet(isValid);
        break;
      default:
        setIsValid(false);
    }
  };

  return (
    <KeyboardAvoidingView>
      <Text style={styles.text}>{configuration.title}</Text>
      <TextInput
        style={[styles.input, { width: screen.width - 48 }]}
        placeholder={configuration.placeholder}
        onChangeText={handleTextChange}
        value={text}
        keyboardType={configuration.type}
      />
      {!isValid && (
        <View style={styles.rulesContainer}>
          <Image source={warningLogo} style={styles.warning} />
          <Text style={styles.rules}>{configuration.rules}</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    borderColor: "#495E57",
    borderRadius: 16,
    height: 40,
    borderWidth: 2,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  rulesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  warning: {
    tintColor: "red",
    width: 10,
    height: 10,
    resizeMode: "contain",
    marginRight: 5,
  },
  rules: {
    color: "red",
    fontSize: 12,
  },
});

export default TextField;
