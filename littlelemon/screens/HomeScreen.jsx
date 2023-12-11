import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import Hero from "../components/Hero";
import { useUser } from "../Dependencies/UserContext";
import { makeProfilePicture } from "../components/ProfileImage";
import { theme } from "../Utils/Theme";
import search from "../assets/search.png";

const HomeScreen = ({ navigation }) => {
  const { getLoggedUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      console.log('reload');
      const loadProfile = async () => {
        try {
          setIsLoading(true);
          const user = await getLoggedUser();
          if (user) {
            console.log('user has to update')
            console.log(user.picture);
            navigation.setOptions({
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Profile')}>
                  {makeProfilePicture(user, user.picture, 38)}
                </Pressable>
              ),
            });
          }
        } catch (error) {
          console.error("Error retrieving user from storage:", error);
          // Handle the error appropriately
        } finally {
          setIsLoading(false);
        }
      };
  
      loadProfile();
  
      // Specify any dependencies that should trigger the effect when changed
      return () => {
        // Cleanup or unsubscribe if needed
      };
    }, [navigation, getLoggedUser])
  );
  
  return (
    <ScrollView style={styles.container}>
      <Hero style={styles.hero} />
      <View style={styles.search}>
        <Pressable style={styles.iconContainer}>
          <Image source={search} style={styles.icon}/>
        </Pressable>
      </View>
      <View style={styles.carousel}>
        <Text style={theme.textVariants.cta}>ORDER FOR DELIVERY !</Text>
      </View>
      <View style={styles.list} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    flex: 0.3,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.primary,
  },
  search: {
    flex: 0.1,
    backgroundColor: theme.colors.primary,
  },
  iconContainer: {
    height: 44,
    width: 44,
    backgroundColor: theme.colors.lightBackground,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing.m
  },
  icon: {
    tintColor: theme.colors.primary
  },
  carousel: {
    flex: 0.2,
    padding: theme.spacing.m,
    justifyContent: 'center'
  },
  list: {
    flex: 0.4,
  },
});

export default HomeScreen;
