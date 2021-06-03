import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";


const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: '20px',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 12,
    color: "#fff",
  },

});


export default Header;
