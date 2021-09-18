import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg";

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  // "https://w7.pngwing.com/pngs/705/535/png-transparent-computer-icons-discord-logo-discord-icon-rectangle-logo-smiley-thumbnail.png"

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
