import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export function SignIn() {
  const { user, signIn } = useAuth();

  async function handleSingIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
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
          <ButtonIcon title="Entrar com o Discord" onPress={handleSingIn} />
        </View>
      </View>
    </Background>
  );
}
