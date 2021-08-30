import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={"stretch"}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}
          e organize sua {"\n"}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entrar com o Discord"
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}
