import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";

const Onboarding = () => {
  const [isButtonActive, setButtonActive] = useState(false);

  const handleSubmission = (isValid) => {
    setButtonActive(isValid);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.formContainer}>
        <Form onSubmission={handleSubmission} />
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={isButtonActive ? () => console.log("pressed") : null}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#d9d9d9",
  },
  header: {
    flex: 0.1,
    backgroundColor: "#d9d9d9",
  },
  formContainer: {
    flex: 0.7,
    backgroundColor: "white",
  },
  footer: {
    flex: 0.2,
    backgroundColor: "#d9d9d9",
  },

  button: {
    alignSelf: "center",
    marginTop: 48,
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: "#F4CE14",
    borderRadius: 16,
    position: "relative",
    
  },
  buttonText: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#495E57",
    padding: 5,
  },
});

export default Onboarding;
