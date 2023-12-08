import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export const ProfileImage = (props) => {
  return (
    <Image
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.radius,
        resizeMode: "cover",
      }}
      source={{uri: props.image}}
    />
  );
};

export const ProfileImagePlaceHolder = (props) => {

  function combineFirstLetters(word1, word2) {
    const firstLetter1 = word1.charAt(0);

    const firstLetter2 = word2.charAt(0);
    return `${firstLetter1}${firstLetter2}`;
  }

  return (
    <View
      style={[
        {
          width: props.size,
          height: props.size,
          borderRadius: props.radius,
        },
        styles.container,
      ]}
    >
      <Text style={styles.placeholder}>
        {props.lastname !== null
          ? combineFirstLetters(props.firstname, props.lastname)
          : `${props.firstname.charAt(0)}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    fontWeight: "bold",
    color: "white",
  },
});
