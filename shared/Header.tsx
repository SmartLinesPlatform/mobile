import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const Header = ({navigation}: {navigation: any}) => {
  function pressionado(){
    console.log('Olá mundo');
  }
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        onPress={() => navigation.toggleDrawer()}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Smart Lines</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#094067",
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