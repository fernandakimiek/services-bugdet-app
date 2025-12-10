import { ReactNode } from "react";
import {
    StyleProp,
    TextInput,
    TextInputProps,
    View,
    ViewStyle
} from "react-native";
import { styles } from "./styles";

type InputProps = TextInputProps & {
  icon?: ReactNode;
  error?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export function Input({
  icon,
  error,
  style,
  containerStyle,
  ...textInputProps
}: InputProps) {
  return (
    <View
      style={[
        styles.inputContainer,
        error && styles.inputContainerError,
        containerStyle,
      ]}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <TextInput
        style={[
          styles.input,
          icon ? styles.inputWithIcon : undefined,
          style,
        ]}
        placeholderTextColor="#676767"
        {...textInputProps}
      />
    </View>
  );
}

