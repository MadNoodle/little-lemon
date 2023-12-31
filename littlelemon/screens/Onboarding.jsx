import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import { User } from "../Domain/Model/User";
import Header from "../components/Header";
import Form from "../components/Form";
import {theme} from "../Utils/Theme";
import { useUser } from "../Dependencies/UserContext";

const Onboarding = () => {

  // MARK: - States
  const [isButtonActive, setButtonActive] = useState(false);
  const { login } = useUser();
  const [transitionUser, setTransitionUser] = useState(null);

  const handleSubmission = (isValid, firstname, email, notificationSettings) => {
    setButtonActive(isValid);
    if(isValid === true) {
      setTransitionUser(new User(isValid, firstname, '', email, '', '', notificationSettings));
    }
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
          onPress={isButtonActive ? () => login(transitionUser) : null}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: theme.colors.lightBackground, 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  header: {
    flex: 0.1,
    backgroundColor: theme.colors.lightBackground,
  },
  formContainer: {
    flex: 0.7,
    backgroundColor: theme.colors.background,
  },
  footer: {
    flex: 0.2,
    backgroundColor: theme.colors.lightBackground
  },

  button: {
    alignSelf: "center",
    marginTop: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.s,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.spacing.m,
    position: "relative",
    
  },
  buttonText: [
    theme.textVariants.cta, 
    {
    justifyContent: "center",
    textAlign: "center",
    color: theme.colors.primary,
    padding: theme.spacing.s,
  },]
});

export default Onboarding;
