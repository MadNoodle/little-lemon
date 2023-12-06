import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeStatus = async () => {
  try {
    await AsyncStorage.setItem("isOnboardingCompleted", `true`);
    console.log('onBoarding completed');
  } catch (error) {
    console.warn(error);
  }
};

export const retrieveStatus = async () => {
  try {
    const value = await AsyncStorage.getItem("isOnboardingCompleted");
    if (value !== null) {
      console.log('onBoardingStatus', value);
      return value;
    }
  } catch (error) {
    console.warn(error);
  }
};
