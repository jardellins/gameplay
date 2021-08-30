import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fbaixar%2Fsorridente-azul.html&psig=AOvVaw0OYVCwsqWQMMkcrag0m9lW&ust=1630440969891000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjyy4rI2fICFQAAAAAdAAAAABAT";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
