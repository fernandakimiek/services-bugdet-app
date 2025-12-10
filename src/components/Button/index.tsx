import { ReactNode } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  backgroundColor: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  text,
  icon,
  backgroundColor,
  onPress,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

