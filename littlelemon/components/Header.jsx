import React from "react";
import { StyleSheet, View, Image } from "react-native";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    padding: 10,
  },
  logo: {
    resizeMode: "contain",
    height: 50,
  },
});

export default Header;
