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
  button: {
    backgroundColor: "#6A46EB",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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
  searchInputContainer: {
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
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
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
