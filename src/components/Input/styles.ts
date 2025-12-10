import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  inputContainerError: {
    borderColor: "#EB5757",
    backgroundColor: "#FDEAEA",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  inputWithIcon: {
    paddingLeft: 0,
  },
});

