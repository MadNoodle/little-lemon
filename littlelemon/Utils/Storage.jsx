import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user) => {
  try {
    const userString = JSON.stringify(user);
    await AsyncStorage.setItem("user", userString);
    console.log(userString);
    console.log("User saved successfully!");
  } catch (error) {
    console.error("Error saving user to AsyncStorage:", error);
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");

    if (jsonValue !== null) {
      const user = JSON.parse(jsonValue);

      // Check if the user object has the notificationSettings property
      if (!user.hasOwnProperty("notificationSettings")) {
        // If not, add a default notificationSettings property
        user.notificationSettings = {
          orderStatus: false,
          passwordChanges: false,
          specialOffers: false,
          newsletter: false,
        };
      }

      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving User from AsyncStorage:", error);
    return null;
  }
};

export const clearUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
    console.log("User data cleared successfully!");
  } catch (error) {
    console.error("Error clearing user data from AsyncStorage:", error);
  }
};
