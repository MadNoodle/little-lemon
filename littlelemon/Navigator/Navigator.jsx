import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet, Pressable } from "react-native";
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { retrieveStatus } from "../Utils/Storage";
import ProfileImage from "../components/ProfileImage";
import logo from "../assets/logo.jpg";
import back from "../assets/back.png";
import { theme } from "../Utils/Theme";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const checkOnBoardingStatus = async () => {
      const isOnboardingCompleted = await retrieveStatus();
      if (isOnboardingCompleted) {
        setIsOnboardingCompleted(true);
        setIsLoading(false);
      }
    };
    checkOnBoardingStatus();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {isOnboardingCompleted ? (
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={populateNavBar()}
        />
      ) : (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
    </Stack.Navigator>
  );

  function populateNavBar() {
    return {
      headerLeft: (navigation) => (
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: theme.colors.primary,
              opacity: pressed ? 0.8 : 1,
              borderRadius: 10,
              padding: 15,
            },
            styles.button,
          ]}
          onPress={() => navigation.back}
        >
          <Image source={back} style={styles.back} />
        </Pressable>
      ),
      headerTitle: () => <Image source={logo} style={styles.logoHeader} />,
      headerRight: () => <ProfileImage size={38} radius={19} />,
    };
  }
};

const styles = StyleSheet.create({
  logoHeader: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    width: 24,
    height: 24,
    tintColor: theme.colors.background,
    resizeMode: "contain",
  },
});

export default Navigator;
