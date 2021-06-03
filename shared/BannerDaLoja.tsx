import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { baseUrl, defaultBanner } from "../utils/constants";

interface props {
  src: string;
  id: string;
  name: string;
}

const BannerDaLoja: React.FC<props> = ({ src, id, name }) => {
  const navigation = useNavigation();
  const [img, setImg] = useState(src);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Fila", {
        id
      }
      )}>
      <Image source={{ uri: img }} style={styles.img} />
      <Text style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: '5px'
  },
  name: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: '30px',
    backgroundColor: '#000',
    opacity: 0.5,
    color: '#ffd500',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  img: {
    alignItems: 'center',
    width: 415,
    height: 130,
  },
});

export default BannerDaLoja;
