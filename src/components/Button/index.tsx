import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  backgroundColor: string;
  onPress?: () => void;
};

export function Button({
  text,
  icon,
  backgroundColor,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

