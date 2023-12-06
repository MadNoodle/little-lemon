import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  TexfieldConfiguration,
  TextField,
} from "../components/ValidableTextField";
import LemonButton from "../components/LemonButton";
import Check from "../components/Check";
import ProfileImage from "../components/ProfileImage";
import avatar from "../assets/profile.png";
import { theme } from "../Utils/Theme";

const ProfileScreen = () => {
  // MARK: - States
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhonelValid] = useState(false);
  const isFormValid =
    isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid;

  // MARK: - Configuration
  const firstNameConf = new TexfieldConfiguration(
    "First Name",
    "First Name",
    "string",
    handleFirstNameValidity,
    "First name should only contain letters",
    "default",
    true
  );

  const lastNameConf = new TexfieldConfiguration(
    "Last Name",
    "Last Name",
    "string",
    handleLastNameValidity,
    "Last name should only contain letters",
    "default",
    true
  );

  const emailConf = new TexfieldConfiguration(
    "E-mail",
    "e-mail",
    "email",
    handleEmailValidity,
    "Please enter a valid e-mail address",
    "email-address",
    true
  );

  const phoneConf = new TexfieldConfiguration(
    "Phone number",
    "Phone number",
    "phone",
    handlePhoneValidity,
    "Please enter a valid US phone number",
    "phone-pad",
    true
  );

  const confs = [firstNameConf, lastNameConf, emailConf, phoneConf];
  const boxes = [
    "Order statuses",
    "Password changes",
    "Special offers",
    "Newsletter",
  ];

  function handleEmailValidity(value) {
    setIsEmailValid(value);
    setIsFormValid(isFormValid);
  }

  function handleFirstNameValidity(value) {
    setIsFirstNameValid(value);
    setIsFormValid(isFormValid);
  }

  function handleLastNameValidity(value) {
    setIsLastNameValid(value);
    setIsFormValid(isFormValid);
  }

  function handlePhoneValidity(value) {
    setIsPhonelValid(value);
    setIsFormValid(isFormValid);
  }

  return (
    <ScrollView>
      <Text
        style={[
          styles.margin,
          { marginVertical: theme.spacing.m },
          styles.title,
        ]}
      >
        Personnal Information
      </Text>
      <Text style={[theme.textVariants.smallTitle, styles.margin]}>Avatar</Text>
      <View style={styles.avatarRow}>
        <ProfileImage source={avatar} size={60} radius={30} />
        <LemonButton type={"primary"} title={"Change"} onPress={() => {}} />
        <LemonButton type={"tertiary"} title={"Remove"} onPress={() => {}} />
      </View>
      <View style={styles.input}>
        {confs.map((config, index) => (
          <TextField
            key={index}
            configuration={config}
            onValidationSet={config.onValidationSet}
          />
        ))}
      </View>
      <Text
        style={[
          styles.margin,
          { marginVertical: theme.spacing.m },
          styles.title,
        ]}
      >
        Email notifications
      </Text>
      {boxes.map((title, index) => (
        <Check key={index} title={title} />
      ))}
      <View style={styles.logoutContainer}>
        <LemonButton type={"secondary"} title={"Log out"} onPress={() => {}} />
      </View>
      <View style={styles.changesContainer}>
        <LemonButton
          type={"tertiary"}
          title={"Discard changes"}
          onPress={() => {}}
        />
        <LemonButton
          type={"primary"}
          title={"Save changes"}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
  margin: {
    marginHorizontal: theme.spacing.m,
  },
  avatarRow: {
    margin: theme.spacing.m,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutContainer: {
    justifyContent: "center",
    marginHorizontal: theme.spacing.m,
  },
  changesContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: theme.spacing.l,
  },
  input: {
    marginHorizontal: theme.spacing.m,
  },
});

export default ProfileScreen;
