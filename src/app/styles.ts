import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
  },
  headerTitleContainer: {
    flexDirection: "column",
    gap: 6,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A46EB",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 8,
    backgroundColor: "#ffffff",
  },
  filterButton: {
    padding: 12,
    borderRadius: 50,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
export { styles };
